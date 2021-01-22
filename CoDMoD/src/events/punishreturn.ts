import { Event } from 'discore.js'
import { GuildMember } from 'discord.js'

import * as config from '../config'
import { ChatMute, JumpMute, Mute } from '../utils/db'

export default class extends Event {
  get options() {
    return { name: 'guildMemberAdd' }
  }

  async run(member: GuildMember) {
    const [mute, chatmute, jumpmute] = await Promise.all([
      Mute.getOne({ userID: member.id }),
      ChatMute.getOne({ userID: member.id }),
      JumpMute.getOne({ userID: member.id }),
    ])

    const roles = [
      mute.endTick > Date.now() ? config.ids.roles.mute : null,
      chatmute.endTick > Date.now() ? config.ids.roles.textmute : null,
      jumpmute.endTick > Date.now() ? config.ids.roles.jumpmute : null
    ].filter(Boolean) as string[]
    if (roles.length > 0) member.roles.add(roles).catch(() => {})
  }
}
