import { Collection, Guild, Message, Permissions } from 'discord.js'

import Command from '../../structures/Command'
import { config } from '../../main'

import { Temproom } from '../../utils/db'

export default class OpenTemproomCommand extends Command {
  get options() {
    return { name: 'личнаякомната открыть' }
  }

  async execute(message: Message) {
    const guild = message.guild as Guild

    const roomDoc = await Temproom.findOne({ userID: message.author.id })
    if (!roomDoc) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Личная комната не найдена'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const room = guild.channels.cache.get(roomDoc.roomID)
    if (room) {
      const overwrites = new Collection<
        string,
        { id: string; allow: number; deny: number }
      >()
      for (const overwrite of room.permissionOverwrites.array().map(o => ({
        id: o.id,
        allow: o.allow.bitfield,
        deny: o.deny.bitfield
      }))) {
        overwrites.set(overwrite.id, overwrite)
      }

      const everyonePerms = overwrites.get(guild.id) || { allow: 0, deny: 0 }

      const flags = Permissions.FLAGS.CONNECT
      const referredDeny = everyonePerms.deny & flags
      overwrites.set(guild.id, {
        id: guild.id,
        allow: everyonePerms.allow | flags,
        deny: everyonePerms.deny ^ referredDeny
      })

      room
        .edit({ permissionOverwrites: overwrites, userLimit: roomDoc.slots })
        .catch(() => { })

      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Ого! Теперь ваша личная комната открыта для всех!'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.msgDeletion }))
        .catch(() => { })
    }
  }
}
