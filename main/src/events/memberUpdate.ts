import { Message, MessageEmbed, TextChannel } from "discord.js";
import { config } from '../main'
import { Event } from 'discore.js'
import { User } from '../utils/db'
import { resolveMember } from "../utils/util";

async function bumpReward(message: Message) {
  const bump = message.embeds.map(m => m.description)
    .filter(Boolean)
    .filter(m => ["Server bumped by", "Оцени его на"].some(x => m!.includes(x))).length > 0 && ["464272403766444044", "315926021457051650"].some(r => message.author.id == r);

  if (bump) {
    const match = message.embeds.map(m => m.description).toString().match(/(?:<@!?)?([0-9]+)>?/)!
    const member = await resolveMember(match[1]) || message.guild?.members.cache.find(u => u.user.tag == message.embeds[0].footer?.text)
    if (!member) return
    User.getOne({ userID: member.id }).then(userDoc => {
      message.channel.send(member, new MessageEmbed({
        description: `Спасибо за бамп нашего сервера, в благодарность ты получаешь **${config.meta.bumpAward}**<:Egold:781552352406143006>\n> Команда снова будет доступна через **4ч.**`,
        color: 3092790,
        footer: {
          text: message.author.tag,
          icon_url: message.author.displayAvatarURL({ dynamic: true })
        },
        timestamp: new Date(),
        thumbnail: { url: "https://cdn.discordapp.com/attachments/578884018045452288/776151307760828456/ethereal.gif" }
      }))
      userDoc.gold += config.meta.bumpAward
      userDoc.save()
    })
  }
}
async function boostReward(message: Message) {
  User.getOne({ userID: message.author.id }).then(userDoc => {

    const timeout = 2592000000;

    if (userDoc.boostCount < 2) {

      userDoc.boostCount++;

      if (userDoc.boostCount == 2) {
        userDoc.inventory = {
          ...userDoc.inventory,
          [config.ids.goods.temprole3d]: (userDoc.inventory[config.ids.goods.temprole3d] || 0) + 1
        }
        userDoc.boostTick = timeout;
      }
    }
    const TextChannel = message.guild!.channels.cache.get(config.ids.channels.text.mainChat) as TextChannel;
    TextChannel.send({
      embed: {
        title: "Спасибо за бустинг!",
        description: `Благодаря тебе мы открываем новые бонусы сервера, и хотим тебя отблагодарить за бустинг нашего сервера.\n> ты получаешь ${userDoc.boostCount == 2 ? "<:selfrole_3d:725759916647907459> **личная роль на 3 дня** и" : ""}**500** чеканных монет!`,
        color: 12881911,
        timestamp: new Date(),
        footer: {
          text: `${message.author.tag} • пожертвовал(а) 1 буст`,
          icon_url: message.author.displayAvatarURL({ dynamic: true })
        },
        thumbnail: { url: "https://imgur.com/sZOHVVT.gif" },
        image: { url: "https://imgur.com/rYVF7bv.png" }
      }
    }).then((msg: Message) => msg.delete({ timeout: config.meta.msgDeletion }))
    userDoc.gold += 500;

    if (userDoc.boostTick !== null && timeout - (Date.now() - userDoc.boostTick) > 0) {
      userDoc.boostCount = 0;
    }
    userDoc.save()
  })
}
export class BoostMessage extends Event {
  get options() {
    return { name: 'message' }
  }

  run(message: Message) {
    if (message.embeds.length > 0)
      bumpReward(message);
    if (message.type == 'USER_PREMIUM_GUILD_SUBSCRIPTION' && message.member?.premiumSinceTimestamp)
      boostReward(message);
  }
}
