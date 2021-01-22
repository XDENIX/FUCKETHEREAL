import { Message } from 'discord.js'

import Command from '../../structures/Command'
import Moderator from '../../models/moderator'

import * as config from '../../config'

export default class extends Command {
  get options() {
    return { name: 'топ баллов' }
  }

  async execute(message: Message, _args: string[]) {
    const docs = await Moderator.filter(d => typeof d.score === 'number')
    const sortedDocs = docs.sort((b, a) => a.score - b.score).slice(0, 10)

    message.channel.send({
      embed: {
        color: config.meta.defaultColor,
        description:
          sortedDocs
            .map((d, i) => {
              return `${i + 1}. <@${d.user_id}> : ${d.score.toLocaleString(
                'ru-RU'
              )}`
            })
            .join('\n') || '\u200b'
      }
    })
  }
}
