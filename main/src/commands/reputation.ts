import { Message } from 'discord.js'

import * as Util from '../utils/util'
import { config } from '../main'

import { User } from '../utils/db'

import { default as Command, CommandParams } from '../structures/Command'

export default class ReputationCommand extends Command {
  get options() {
    return { name: 'репутация' }
  }

  async execute(message: Message, args: string[], { guild }: CommandParams) {

    const author = await User.getOne({ userID: message.author.id }); // запрос на автора сообщения

    if (author.lastRepTick !== null && config.meta.repIntHourly - (Date.now() - author.lastRepTick) > 0) return message.channel
      .send({
        embed: {
          title: "```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀РЕПУТАЦИЯ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```",
          description: `Вам доступная одна репутация раз в **3 часа**! осталось подождать **${Util.parseFilteredFullTimeArray(config.meta.repIntHourly - (Date.now() - author.lastRepTick))[0]}**.`,
          color: 3092790,
          footer: {
            text: message.author.tag,
            icon_url: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: new Date(),
          thumbnail: { url: "https://cdn.discordapp.com/attachments/578884018045452288/776151307760828456/ethereal.gif" },
        }
      })


    const targetMember = await Util.resolveMember(args[0], guild)
    if (!targetMember || targetMember.user.id == message.author.id) return message.channel
      .send({
        embed: {
          title: "```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀РЕПУТАЦИЯ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```",
          description: `Укажите пользователя которому хотите выдать репутацию`,
          color: 3092790,
          footer: {
            text: message.author.tag,
            icon_url: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: new Date(),
          thumbnail: { url: "https://cdn.discordapp.com/attachments/578884018045452288/776151307760828456/ethereal.gif" },
        }
      })

    if (!author.repUsers || (author.repUsers.id !== targetMember.user.id) || author.repUser.time <= Date.now())
      author.repUsers = {
        ...author.repUsers,
        id: ""
      };
    else
      return message.channel
        .send({
          embed: {
            title: "```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀РЕПУТАЦИЯ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```",
            description: `Вы недавно влияли на репутацию данного пользователя.`,
            color: 3092790,
            footer: {
              text: message.author.tag,
              icon_url: "https://imgur.com/MZwG7J1.gif"
            },
            timestamp: new Date(),
            thumbnail: { url: message.author.displayAvatarURL({ dynamic: true }) },
          }
        })

    if (!config.meta.typeofReputation.some(x => x == args[1]))
      return message.channel
        .send({
          embed: {
            title: "```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀РЕПУТАЦИЯ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```",
            description: `Укажите один из аргументов. Вы можете указать \`+\` или \`-\``,
            color: 3092790,
            footer: {
              text: message.author.tag,
              icon_url: message.author.displayAvatarURL({ dynamic: true })
            },
            timestamp: new Date(),
            thumbnail: { url: "https://cdn.discordapp.com/attachments/578884018045452288/776151307760828456/ethereal.gif" },
          }
        })

    author.lastRepTick = Date.now();
    author.repUsers = { id: targetMember.user.id, time: Date.now() + config.meta.reputationInterval };

    const linked = await User.getOne({ userID: targetMember.user.id }); // упомянутый юзер
    args[1] == '-' ? linked.reputation-- : linked.reputation++;


    message.channel
      .send({
        embed: {
          title: "```⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀РЕПУТАЦИЯ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀```",
          description: `Пользователь **${message.author.tag}** ${args[1] == '-' ? `испортил репутацию` : `добавил репутацию`} **${targetMember.user.tag}**`,
          color: 3092790,
          footer: {
            text: message.author.tag,
            icon_url: message.author.displayAvatarURL({ dynamic: true })
          },
          timestamp: new Date(),
          thumbnail: { url: "https://cdn.discordapp.com/attachments/578884018045452288/776151307760828456/ethereal.gif" },
        }
      })
    author.save();
    linked.save();
    return;
  }
}