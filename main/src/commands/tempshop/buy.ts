import { Guild, Message } from 'discord.js'

import goods from '../../goods'
import Command from '../../structures/Command'

import * as Util from '../../utils/util'
import { config } from '../../main'

import { User } from '../../utils/db'

export default class BuyCommand extends Command {
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

    if (userDoc.gold < item.price) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Недостаточно средств'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    userDoc.gold -= item.price
    userDoc.inventory = {
      ...userDoc.inventory,
      [item.id]: (userDoc.inventory[item.id] || 0) + 1
    }
    userDoc.save()

    const guild = message.guild as Guild
    message.channel
      .send({
        embed: {
          color: config.meta.defaultColor,
          title: 'Успешная покупка!',
          thumbnail: { url: 'https://i.imgur.com/WzmW2yV.gif' },
          description: [
            `${message.author}, вы приобрели **${Util.resolveEmoji(
              item.emoji
            )}${item.name}**`,
            'Надеемся увидеть вас в нашем магазине снова!'
          ].join('\n'),
          footer: {
            text: `${message.author.tag
              } • стоимость ${item.price.toLocaleString(
                'ru-RU'
              )} ${Util.pluralNoun(item.price, 'золото', 'золота', 'золота')}`,
            icon_url: guild.iconURL({ dynamic: true })
          },
          timestamp: Date.now()
        }
      })
      .then(msg => msg.delete({ timeout: config.meta.msgDeletion }))
      .catch(() => { })
  }
}
