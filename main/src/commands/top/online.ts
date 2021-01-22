import { User as DiscordUser, Message, MessageEmbedOptions } from 'discord.js'

import Command from '../../structures/Command'

import * as Util from '../../utils/util'
import { default as client, config } from '../../main'

import { User } from '../../utils/db'

export class TextTopCommand extends Command {
  get options() {
    return { name: 'топонлайн текстовый' }
  }

  execute(message: Message) {
    User.getData()
      .then(data => [...data.values()])
      .then(docs => docs.sort((b, a) => a.messageCount - b.messageCount))
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
          .map((d, i) => {
            return [
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
                name: '```⠀⠀⠀СООБЩЕНИЙ⠀⠀⠀```',
                value: `\`\`\`\n${d.doc.messageCount.toLocaleString(
                  'ru-RU'
                )}\`\`\``,
                inline: true
              }
            ]
          })
          .reduce((p, a) => [...p, ...a], [])

        message.channel.send({ embed }).catch(() => { })
      })
  }
}

export class VoiceActivityTopCommand extends Command {
  get options() {
    return { name: 'топонлайн общий' }
  }

  execute(message: Message) {
    User.getData()
      .then(data => [...data.values()])
      .then(docs => {
        return docs.map(d => {
          return {
            ...d,
            voiceTime: d.voiceTime + Util.parseVoiceActivity(d.voiceActivity)
          }
        })
      })
      .then(docs => docs.sort((b, a) => a.voiceTime - b.voiceTime))
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
              name: '```⠀⠀⠀⠀⠀ВРЕМЯ⠀⠀⠀⠀⠀```',
              value: `\`\`\`\n${Util.parseFilteredTimeString(
                d.doc.voiceTime
              )}\`\`\``,
              inline: true
            }
          ])
          .reduce((p, a) => [...p, ...a], [])

        message.channel.send({ embed }).catch(() => { })
      })
  }
}

export class WeekActivityTopCommand extends Command {
  get options() {
    return { name: 'топонлайн недельный' }
  }

  execute(message: Message) {
    User.getData()
      .then(data => [...data.values()])
      .then(docs => {
        return docs.map(d => {
          const weekActivity = Util.filterWeekActivity(d.voiceActivity)
          return { ...d, voiceTime: Util.parseVoiceActivity(weekActivity) }
        })
      })
      .then(docs => docs.sort((b, a) => a.voiceTime - b.voiceTime))
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
          description: '```\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     [Недельный топ]```',
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
              name: '```⠀⠀⠀⠀⠀ВРЕМЯ⠀⠀⠀⠀⠀```',
              value: `\`\`\`\n${Util.parseFilteredTimeString(
                d.doc.voiceTime
              )}\`\`\``,
              inline: true
            }
          ])
          .reduce((p, a) => [...p, ...a], [])

        message.channel.send({ embed }).catch(() => { })
      })
  }
}
