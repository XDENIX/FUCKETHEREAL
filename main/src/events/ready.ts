import { Event } from 'discore.js'
import { invs, tracking } from '../main'

import * as Util from '../utils/util'

export default class extends Event {
  async run() {

    Util.openCreateroom()
    Util.cleanupPrivaterooms()
    await Util.cleanupVoiceActivity()

    await Util.fetchVoiceMembers()

    Util.setBanner()
    Util.checkTemps()

    Util.setStatus()
    Util.enableEvents()
    Util.readyMessage()
    Util.startAutoMessage()

    tracking.init()
    invs.onClientReady()
    tracking.onClientReady()
  }
}
