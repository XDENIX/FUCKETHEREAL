import { Event } from 'discore.js'
import { VoiceState } from 'discord.js'

import Moderator from '../models/moderator'

import * as config from '../config'
import { voiceMembers } from '../main'

export default class extends Event {
  get options() {
    return { name: 'voiceStateUpdate' }
  }

  async run(oldState: VoiceState, newState: VoiceState) {
    if (oldState.channelID === newState.channelID) return

    if (
      newState.channel &&
      newState.channel.parentID &&
      config.meta.modCategories.includes(newState.channel.parentID)
    ) {
      const { member } = newState
      if (!member) return
      if (voiceMembers.has(newState.id)) return

      const some = (id: string) => member.roles.cache.has(id)
      if (!config.meta.modRoles.some(some)) return

      voiceMembers.set(newState.id, Date.now())
    } else {
      const joinDate = voiceMembers.get(newState.id)
      if (!joinDate) return

      voiceMembers.delete(newState.id)

      const mod = await Moderator.getOne({ user_id: newState.id })

      mod.voice_time += Math.floor((Date.now() - joinDate) / 1e3)
      mod.day_voice_time += Math.floor((Date.now() - joinDate) / 1e3)
      mod.save()
    }
  }
}
