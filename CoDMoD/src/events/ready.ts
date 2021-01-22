import { Event } from 'discore.js'

import client from '../main'
import * as Util from '../utils/util'

export default class extends Event {
  run() {
    client.checkMainGuildExistance()

    client.enableEvents()
    Util.checkTemps()
    client.readyMessage()
  }
}
