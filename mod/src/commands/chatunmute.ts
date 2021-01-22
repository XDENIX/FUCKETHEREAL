import { Message } from 'discord.js'

import PunishManager from '../managers/PunishManager'
import * as Util from '../utils/util'
import * as config from '../config'

import { default as Command, CommandParams } from '../structures/Command'

export default class ChatUnmuteCommand extends Command {
  get cOptions() {
    return {
      suppressArgs: true,
      allowedRoles: config.access.commands.chatunmute
    }
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
      sendError('Нельзя снять наказание себе')
      return
    }

    const reason = args.join(' ')
    if (reason.length < 1) {
      sendError('Укажите причину')
      return
    }

    PunishManager.request({
      message: {
        embed: {
          color: config.meta.defaultColor,
          title: `Снятие ChatMute | ${message.author.tag}`,
          description: `**Причина**\n> ${reason}`,
          fields: [
            { name: 'Пользователь', value: String(targetMember), inline: true }
          ]
        }
      },
      userID: targetMember.id,
      guildID: guild.id,
      moderID: message.author.id,
      reason,
      type: config.ids.punishments.chatunmute
    })
  }
}
