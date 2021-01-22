import { Guild, Message } from 'discord.js'

import Command from '../../structures/Command'
import * as Util from '../../utils/util'
import { config } from '../../main'

import { Temprole, User } from '../../utils/db'

export default class TemproleColorCommand extends Command {
  get options() {
    return { name: 'личнаяроль цвет' }
  }

  async execute(message: Message, args: string[]) {
    const guild = message.guild as Guild

    const { temprole1d, temprole3d, temprole7d } = config.ids.goods
    const temproleGoods = [temprole1d, temprole3d, temprole7d]
    const roleDoc = await Temprole.findOne(d => {
      if (typeof d.itemID !== 'number') return false
      return d.userID === message.author.id && temproleGoods.includes(d.itemID)
    })
    if (!roleDoc) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Личная роль не найдена'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const price = config.meta.temproleColorPrice

    const userDoc = await User.getOne({ userID: message.author.id })
    if (userDoc.gold < price) {
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

    const hexColor = Util.resolveHex(args[0])
    const color = hexColor ? parseInt(hexColor, 16) : 0

    const confirmMsg = await message.channel
      .send({
        embed: {
          color: config.meta.defaultColor,
          description: [
            `С вашего счета будет снято ${price.toLocaleString(
              'ru-RU'
            )}${Util.resolveEmoji(config.meta.emojis.cy).trim()}`,
            '',
            'Подтвердите свое действие'
          ].join('\n')
        }
      })
      .catch(() => { })
    if (!confirmMsg) return

    const confirmRes = await Util.confirm(
      confirmMsg,
      message.author,
      config.meta.temproleNameConfirmLimit
    )
    confirmMsg.delete().catch(() => { })
    if (!confirmRes) return

    userDoc.gold -= price
    userDoc.save()

    const role = guild.roles.cache.get(roleDoc.roleID)
    if (role) role.edit({ color }).catch(() => { })

    message.channel
      .send({
        embed: {
          color: config.meta.defaultColor,
          title: `${Util.resolveEmoji(config.emojis.roles)}Новый цвет!`,
          thumbnail: { url: 'https://i.imgur.com/9clO0NV.gif' },
          description: [
            'Ты успешно изменил(а) цвет личной роли',
            '⠀⠀теперь твоя роль сияет как бриллиант.',
            `> <@&${roleDoc.roleID}>`
          ].join('\n'),
          footer: {
            text: `${message.author.tag} • стоимость ${price.toLocaleString(
              'ru-RU'
            )} ${Util.pluralNoun(price, 'золото', 'золота', 'золота')}`,
            icon_url: guild.iconURL({ dynamic: true })
          },
          timestamp: Date.now()
        }
      })
      .then(msg => msg.delete({ timeout: config.meta.msgDeletion }))
      .catch(() => { })
  }
}
