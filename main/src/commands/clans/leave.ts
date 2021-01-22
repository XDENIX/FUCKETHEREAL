import { Message } from 'discord.js'

import Command from '../../structures/Command'
import clanManager from '../../managers/clan'
import { config } from '../../main'

import { User } from '../../utils/db'

export default class ClanLeaveCommand extends Command {
  get options() {
    return { name: 'покинутьгильдию' }
  }
  get cOptions() {
    return { prefix: '/' }
  }

  async execute(message: Message) {
    const userDoc = await User.getOne({ userID: message.author.id })
    if (typeof userDoc.clanID !== 'string') {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Вы не состоите в гильдии',
            image: { url: 'https://i.imgur.com/bykHG7j.gif' }
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const clan = clanManager.get(userDoc.clanID)
    if (!clan) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description:
              'Внутренняя ошибка: Гильдия не найдена. Обратитесь к тех. администрации сервера',
            image: { url: 'https://i.imgur.com/bykHG7j.gif' }
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const clanMember = clan.members.get(message.author.id)

    if (clanMember) {
      if (clanMember.owner) {
        message.channel
          .send({
            embed: {
              color: config.meta.defaultColor,
              description: 'Нельзя выйти из своей гильдии',
              image: { url: 'https://i.imgur.com/bykHG7j.gif' }
            }
          })
          .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
          .catch(() => { })
        return
      }
      clanMember.kick()
    }
  }
}
