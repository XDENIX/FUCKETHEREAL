import { Event } from 'discore.js'
import { VoiceState } from 'discord.js'
import { Mute } from '../utils/db'

export default class extends Event {
  get options() {
    return { name: 'voiceChannelJoin' }
  }

  async run(_: VoiceState, state: VoiceState) {
    const muteDoc = await Mute.findOne({ userID: state.id })
    if (!muteDoc && state.serverMute) state.setMute(false).catch(() => {})
    else if (muteDoc && !state.serverMute) state.setMute(true).catch(() => {})
  }
}
