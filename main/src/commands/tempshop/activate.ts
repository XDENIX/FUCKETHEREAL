import { Guild, Message } from 'discord.js'

import goods from '../../goods'
import Command from '../../structures/Command'

import * as Util from '../../utils/util'
import { config } from '../../main'

import { User } from '../../utils/db'

export default class ActivateCommand extends Command {
  async execute(message: Message, args: string[]) {
    const index = Number(args[0])
    if (!Number.isInteger(index)) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Укажите корректный номер товара'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const item = Object.values(goods)[index - 1]
    if (!item) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Товар не найден'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const userDoc = await User.getOne({ userID: message.author.id })

    const inventoryItem = userDoc.inventory[item.id]
    if (!inventoryItem) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'В инвентаре отсутствует данный товар'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    if (!item.activate) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Товар не подлежит активации'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const activationres = await item.activate(message.author, args.slice(1))
    if (!activationres.ok) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: activationres.reason || 'Неизвестная ошибка'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    userDoc.inventory = {
      ...userDoc.inventory,
      [item.id]: (inventoryItem || 1) - 1
    }
    userDoc.save()

    const guild = message.guild as Guild
    message.channel
      .send({
        embed: {
          color: config.meta.defaultColor,
          title: 'Успешная активация!',
          thumbnail: { url: 'https://i.imgur.com/dTOodX2.gif' },
          description: [
            `${message.author}, вы активировали **${Util.resolveEmoji(
              item.emoji
            )}${item.name}**`,
            '⠀⠀⠀⠀Ты уже на один шаг ближе к богатству!⠀⠀⠀⠀'
          ].join('\n'),
          footer: {
            text: message.author.tag,
            icon_url: guild.iconURL({ dynamic: true })
          },
          timestamp: Date.now()
        }
      })
      .then(msg => msg.delete({ timeout: config.meta.msgDeletion }))
      .catch(() => { })
  }
}
