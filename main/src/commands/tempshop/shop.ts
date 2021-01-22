import { Message, Guild, MessageEmbedOptions } from 'discord.js'

import Command from '../../structures/Command'

import { config } from '../../main'

import { default as goods } from '../../goods'

export default class TempShopCommand extends Command {
  execute(message: Message) {
    const guild = message.guild as Guild
    const embed: MessageEmbedOptions = {
      color: config.meta.defaultColor,
      author: {
        name: message.author.tag,
        icon_url: message.author.displayAvatarURL({ dynamic: true })
      },
      title: `Магазин временных привилегий | ${guild.name}`,
      image: {
        url:
          'https://trello-attachments.s3.amazonaws.com/5f4b6e08c724c15f7bdc96ac/800x300/be3aa9220715c6e2d74486ba464907c0/magazin_lvl.gif'
      }
    }
    embed.fields = Object.values(goods).map((g, i) => [{
      name: '```⠀№.⠀```',
      value: `\`\`\`\n${i + 1}.\`\`\``,
      inline: true
    },
    {
      name: '``` НИК ```',
      value: `\`\`\`\n${g.name}\`\`\``,
      inline: true
    },
    {
      name: '``` ЦЕНА ```',
      value: `\`\`\`\n${g.price.toLocaleString('ru-RU')}\`\`\``,
      inline: true
    }]).reduce((p, a) => [...p, ...a], [])
    message.channel.send({ embed }).catch(() => { })
  }
}
