import { Message } from 'discord.js'

import PunishManager from '../managers/PunishManager'
import * as Util from '../utils/util'
import * as config from '../config'

import { default as Command, CommandParams } from '../structures/Command'

export default class UnbanCommand extends Command {
  get cOptions() {
    return { suppressArgs: true, allowedRoles: config.access.commands.unban }
  }

  async execute(message: Message, args: string[], { guild }: CommandParams) {
    const sendError = (content: string) => {
      const embed = { color: config.meta.defaultColor, description: content }
      message.channel
        .send({ embed })
        .then(msg => msg.delete({ timeout: config.ticks.errMsgDeletion }))
        .catch(() => {})
    }

    const targetID = Util.resolveUserID(args.shift() || '')
    if (!targetID) {
      sendError('Участник не найден')
      return
    }
    if (targetID === message.author.id) {
      sendError('Нельзя снять наказание себе')
      return
    }

    const reason = args.join(' ')
    if (reason.length < 1) {
      sendError('Укажите причину')
      return
    }

    const ban = await guild.fetchBan(targetID).catch(() => {})
    if (!ban) {
      sendError('Участник не забанен')
      return
    }

    PunishManager.request({
      message: {
        embed: {
          color: config.meta.defaultColor,
          title: `Снятие Ban | ${message.author.tag}`,
          description: `**Причина**\n> ${reason}`,
          fields: [
            { name: 'Пользователь', value: `<@!${targetID}>`, inline: true }
          ]
        }
      },
      userID: targetID,
      guildID: guild.id,
      moderID: message.author.id,
      reason,
      type: config.ids.punishments.unban
    })
  }
}
