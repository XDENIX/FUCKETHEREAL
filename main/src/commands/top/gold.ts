import { User as DiscordUser, Message, MessageEmbedOptions } from 'discord.js'

import Command from '../../structures/Command'
import { default as client, config } from '../../main'

import { User } from '../../utils/db'

export default class GoldTopCommand extends Command {
  get options() {
    return { name: 'топ богачей' }
  }

  execute(message: Message) {
    User.getData()
      .then(data => [...data.values()])
      .then(docs => docs.sort((b, a) => a.gold - b.gold))
      .then(docs => {
        return docs.map(d => ({
          user: client.users.cache.get(d.userID) as DiscordUser,
          doc: d
        }))
      })
      .then(data => data.filter(d => d.user))
      .then(data => data.slice(0, 5))
      .then(data => {
        const embed: MessageEmbedOptions = {
          color: config.meta.defaultColor,
          description: '```\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     [Общий топ]```',
          image: { url: 'https://i.imgur.com/Gu1Kdv2.gif' }
        }

        // if (data[0]) {
        //   embed.thumbnail = {
        //     url: data[0].user.displayAvatarURL({ dynamic: true })
        //   }
        // }

        embed.fields = data
          .map((d, i) => [
            {
              name: '```⠀#.⠀```',
              value: `\`\`\`\n${i + 1}.\`\`\``,
              inline: true
            },
            {
              name: '```⠀⠀⠀⠀⠀⠀⠀НИК⠀⠀⠀⠀⠀⠀⠀```',
              value: `\`\`\`\n${d.user.tag}\`\`\``,
              inline: true
            },
            {
              name: '```⠀⠀⠀⠀БАЛАНС⠀⠀⠀⠀```',
              value: `\`\`\`\n${d.doc.gold.toLocaleString('ru-RU')}\`\`\``,
              inline: true
            }
          ])
          .reduce((p, a) => [...p, ...a], [])

        message.channel.send({ embed }).catch(() => { })
      })
  }
}
