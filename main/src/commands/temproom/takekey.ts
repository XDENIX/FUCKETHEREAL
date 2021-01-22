import { Collection, Guild, Message, Permissions } from 'discord.js'

import Command from '../../structures/Command'
import * as Util from '../../utils/util'
import { config } from '../../main'

import { Temproom } from '../../utils/db'

export default class TemproomTakekeyCommand extends Command {
  get options() {
    return { name: 'забрать ключ' }
  }

  async execute(message: Message, args: string[]) {
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

    const targetMember = await Util.resolveMember(args[0], guild)
    if (!targetMember) {
      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: 'Участник не найден'
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.errorMsgDeletion }))
        .catch(() => { })
      return
    }

    const room = guild.channels.cache.get(roomDoc.roomID)
    if (room) {
      const flags = Permissions.FLAGS.CONNECT

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

      const targetPerms = overwrites.get(targetMember.id) || {
        allow: 0,
        deny: 0
      }

      const referredAllow = targetPerms.allow & flags

      const newallow = targetPerms.allow ^ referredAllow
      const newdeny = targetPerms.deny
      overwrites.set(targetMember.id, {
        id: targetMember.id,
        allow: newallow,
        deny: newdeny
      })

      if (!newallow && !newdeny) overwrites.delete(targetMember.id)

      room.edit({ permissionOverwrites: overwrites }).catch(() => { })

      message.channel
        .send({
          embed: {
            color: config.meta.defaultColor,
            description: `Вы исключили ${targetMember} из списка участников, имеющих доступ к личной комнате.`
          }
        })
        .then(msg => msg.delete({ timeout: config.meta.msgDeletion }))
        .catch(() => { })
    }
  }
}
