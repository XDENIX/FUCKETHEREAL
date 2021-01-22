import { Trigger } from 'discore.js'
import { Message } from 'discord.js'

import * as Util from '../utils/util'

import { User } from '../utils/db'
import { awardXP } from '../utils/util'

export default class MessageCounter extends Trigger {
  run(message: Message) {
    if (!message.guild) return
    if (!Util.verifyMainGuild(message.guild.id)) return

    User.getOne({ userID: message.author.id }).then(doc => {
      doc.messageCount += 1

      if ((doc.lastMessageTick || 0) + 3e4 < Date.now()) {
        doc.lastMsgXpTick = Date.now()
      }
      awardXP(doc, (doc.lastMessageTick || 0) + 3e4 < Date.now() ? Math.floor(Math.random() * (3 - 1 + 1)) + 1 : 0)
    })
  }
}
