import { Message, TextChannel } from 'discord.js'

import Pages from '../../structures/Pages'
import Command from '../../structures/Command'

import { genActivationsMsg, genInventoryMsg } from '../../utils/util'

export default class ActivationsCommand extends Command {
  async execute(message: Message) {
    const pageContents = await Promise.all([
      genActivationsMsg(message.author),
      genInventoryMsg(message.author)
    ])

    const pages = new Pages(pageContents)
    pages.send(message.channel as TextChannel, message.author)
  }
}
