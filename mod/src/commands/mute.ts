import { Message } from 'discord.js'

import PunishManager from '../managers/PunishManager'
import * as Util from '../utils/util'
import * as config from '../config'

import { default as Command, CommandParams } from '../structures/Command'
import Moderator from '../models/moderator'

export default class MuteCommand extends Command {
  get cOptions() {
    return { suppressArgs: true, allowedRoles: config.access.commands.mute }
  }

  async execute(message: Message, args: string[], { guild }: CommandParams) {
    const sendError = (content: string) => {
      const embed = { color: config.meta.defaultColor, description: content }
      message.channel
        .send({ embed })
        .then(msg => msg.delete({ timeout: config.ticks.errMsgDeletion }))
        .catch(() => {})
    }

    const targetMember = await Util.resolveMember(args.shift() || '', guild)
    if (!targetMember) {
      sendError('Участник не найден')
      return
    }
    if (targetMember.id === message.author.id) {
      sendError('Нельзя замутить себя')
      return
    }

    const duration = Util.msConvert(args.shift())
    if (typeof duration !== 'number') {
      sendError('Укажите длительность наказания')
      return
    }

    const reason = args.join(' ')
    if (reason.length < 1) {
      sendError('Укажите причину')
      return
    }

    Moderator.getOne({ user_id: message.author.id }).then(mod => {
      mod.mute_count += 1
      mod.score += 0.2
      mod.save()
    })

    PunishManager.mute({
      userID: targetMember.id,
      guildID: guild.id,
      moderID: message.author.id,
      duration,
      reason
    })

    // PunishManager.request({
    //   message: {
    //     embed: {
    //       color: config.meta.defaultColor,
    //       title: `Выдача Mute | ${message.author.tag}`,
    //       description: `**Причина**\n> ${reason}`,
    //       fields: [
    //         { name: 'Пользователь', value: String(targetMember), inline: true },
    //         {
    //           name: 'Время наказания',
    //           value:
    //             typeof duration === 'number'
    //               ? Util.parseFilteredTimeArray(duration, {
    //                   nouns: config.meta.pluralTime
    //                 }).join(' ')
    //               : 'Навсегда',
    //           inline: true
    //         }
    //       ]
    //     }
    //   },
    //   userID: targetMember.id,
    //   guildID: guild.id,
    //   duration,
    //   reason,
    //   type: config.ids.punishments.mute
    // })
  }
}
