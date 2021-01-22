import { Intents, Permissions } from 'discord.js'
require('dotenv').config()

export const debug = false

export const internal = {
  token: '',
  prefix: '!',
  mongoURI: 'mongodb://127.0.0.1:27017/ethereal_main',
  prefixes: {
    clans: '/'
  }
}

export const intents =
  Intents.NON_PRIVILEGED |
  Intents.FLAGS.GUILD_MEMBERS |
  Intents.FLAGS.GUILD_PRESENCES

export const ids = {
  guilds: {
    main: '728716141802815539',
    administration: '539086938964099074'
  },
  messages: { verification: '771008365756416000' },
  channels: {
    text: {
      mainChat: '761614282130587698',
      commands: ["761614282130587698", "737034592506085486", "749357120838828083", "74783466054483983"]
    },
    voice: {
      createEvent: '748230978941616128',
      createClose: '761617242030866453',
      createPrivate: '737043501581074540'
    }
  },
  categories: {
    events: '747828228613210142',
    closes: '749356426094182410',
    loverooms: '737307684792959017',
    temprooms: '737306176525697054',
    privaterooms: '728725005285851216'
  },
  roles: {
    button: '728723863348707338',

    hero: '747168601940688976',
    mute: '730203474662260819',
    event: '730204747898028202',
    textmute: '730203474263801903', // tmute
    jumpmute: '730203473521541170', // jmute
    onenitro: '730204566594912397',

    clans: '730204746845257728',
    temproles: '730204746949853196',

    immortalSponsor: '744794061600456784',
    legendarySponsor: '741599274579525662',
    diamondSponsor: '744794551260282911',

    owner: '739918620796125245',
    orion: '740312785967251467',
    sirius: '739906975898402938', // admin
    astral: '740312130456256552', // jr admin
    ghost: '740360450704670920', // moderator
    phoenix: '740361025513193473', // helper
    elderEvent: '744564449729445888',
    eventMod: '744563995771404408',

    eventBan: '730203472703783023',

    warns: ['730203471155822682', '730203471747481620'],

    gender: {
      null: '730204767590285364',
      male: '730204766155571291',
      female: '730204766671601724'
    },
    games: {
      Valorant: '730206983227179169',
      Minecraft: '730206983889748068',
      Overwatch: '730206984309047356',
      'Osu!': '730204768500187246',
      'Dota 2': '730206982350438522',
      'League of Legends': '730204769410613279',
      "PLAYERUNKNOWN'S BATTLEGROUNDS": '730204768848576553',
      'Counter-Strike: Global Offensive': '730204769410613279',
      'Among Us': '759345255165329478 ',
      'Brawlhalla': '759345255165329478'
    }
  },
  chests: {
    gold: 1 << 0,
    item: 1 << 1
  },
  goods: {
    ticket: 1 << 0,
    temprole1d: 1 << 1,
    temprole3d: 1 << 2,
    temprole7d: 1 << 3,
    hero7d: 1 << 4,
    temproom7d: 1 << 5
  },
  postTypes: {
    aesthetic: 0,
    erotic: 1,
    fun: 2
  }
}

export const flags = {
  backgrounds: [1n << 0n, 1n << 1n, 1n << 2n, 1n << 3n]
}

export const emojis = {
  check: '✅',
  cross: '❌',
  pencil: '📝',
  question: '❔',
  arrowLeft: '⬅️',
  arrowRight: '➡️',
  wastebasket: '🗑️',
  arrowBackward: '◀️',
  arrowForward: '▶️',

  arrowBackwardMenu: '775084939682381854',
  arrowForwardMenu: '775084939052974091',
  rulesMenu: '774629841239801906',
  welcomeMenu: '774630747985412106',
  commandsMenu: '774629841210310667',

  empty: '691712892923543593',
  roles: '697223345049042964',
  verification: {
    id: '698596668769173645',
    display: '<a:verification:698596668769173645>'
  },
  fail: {
    id: '698590387002146816',
    display: '<a:fail:698590387002146816>'
  },
  gold: '781552352406143006',
  crystal: '781558060971458590',
  medal: {
    id: '753016395612291084',
    display: '<:medal:753016395612291084>'
  },
  places: {
    first: {
      id: '691712892998778920',
      display: '<:first:691712892998778920>'
    },
    second: {
      id: '691712893179134013',
      display: '<:second:691712893179134013>'
    },
    third: {
      id: '691712893124608052',
      display: '<:third:691712893124608052>'
    }
  }
}

export const colors = {
  embed: 0x2f3136
}

export const timezones = {
  moscow: 'Europe/Moscow'
}

export const repRanks = {
  '0': 'Неизвестный',

  '-1': 'Недоверие',
  '-10': 'Настороженность',
  '-20': 'Неуверенность',
  '-30': 'Неприязнь',
  '-40': 'Враждебность',
  '-50': 'Ненависть',

  '5': 'Симпатия',
  '15': 'Доверие',
  '30': 'Превознесение',
  '50': 'Почтение',
  '65': 'Уважение',
  '80': 'Дружелюбие',
  '90': 'Сверхразум',
  '130': 'Благородный|Благородная',
  '160': 'Хранитель мудрости',
  '200': 'Превозносимый'
}

export const lvlRanks: { [key: number]: string } = {
  1: 'Отшельник',
  2: 'Странник',
  3: 'Новобранец',
  4: 'Балроги',
  5: 'Майар',
  6: 'Айнур',
  7: 'Мертвые',
  8: 'Охотник',
  9: 'Назгулы',
  10: 'Орки',
  11: 'Гоблины',
  12: 'Энты',
  13: 'Хуорны',
  14: 'Вивисектор',
  15: 'Легендапустошей',
  16: 'Аннигилятормутантов',
  17: 'Эйдан',
  18: 'Эльфы',
  19: 'Потрошитель',
  20: 'Следопыт',
  21: 'Истребитель',
  22: 'Воргены',
  23: 'Одержимый',
  24: 'Миротворец',
  25: 'Вульперы',
  26: 'Зверобой',
  27: 'Ночнорожденные',
  28: 'Совершенные',
  29: 'Бессмертные'
}
export const swapCoefs = {
  '1': 24,
  '300': 27,
  '500': 28,
  '700': 30,
  '1000': 32
}

export const access = {
  commands: {
    award: [ids.roles.owner, ids.roles.orion, ids.roles.sirius],
    take: [ids.roles.owner, ids.roles.orion, ids.roles.sirius],
    say: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix,
      ids.roles.eventMod,
      ids.roles.elderEvent,
    ]
  }
}

export const postTypes = {
  эстетика: ids.postTypes.aesthetic,
  эротика: ids.postTypes.erotic,
  мемник: ids.postTypes.fun
}

export const postChannels = {
  [ids.postTypes.aesthetic]: '759674932493156383',
  [ids.postTypes.erotic]: '759676367482257459',
  [ids.postTypes.fun]: '774362625865678848'
}
export const postSend = {
  [ids.postTypes.aesthetic]: '737037101081690264',
  [ids.postTypes.erotic]: '737040143172632628',
  [ids.postTypes.fun]: '774359236096294922'
}
export const postEmojis = {
  [ids.postTypes.aesthetic]: '772043099269759017',
  [ids.postTypes.erotic]: '772043457199603732',
  [ids.postTypes.fun]: '691712893623861279'
}

export const meta = {
  privateRoomName: "{nickname}'s room",
  closeRoomName: "{nickname}'s close",
  eventRoomName: "{nickname}'s event",
  allowedGuilds: [ids.guilds.main, ids.guilds.administration],
  joinRoleID: ids.roles.gender.null,
  defaultColor: colors.embed,
  typeofReputation: ['+', '-'],
  brLoseColor: 0xe97171,
  brWinColor: 0xa0c1b8,
  bfLoseColor: 0xe97171,
  bfWinColor: 0xa0c1b8,
  defaultTimezone: timezones.moscow,
  welcomeChannelID: ids.channels.text.mainChat,
  errorMsgDeletion: 1.5e4, // 15 secs
  msgDeletion: 3e4, // 30 secs
  timelyAmount: 50,
  timelyInterval: 4.32e7, // 12 hours
  minimumAccountTime: 4.32e7, // 12 hours
  repIntHourly: 1.08e+7, // 3 часа
  maxAwardGold: 25000,
  maxAwardCrystals: 10000,
  pairCost: 5000,
  clanCost: 1000,
  bumpAward: 150,
  clanNameLimit: 32,
  clanDescLimit: 200,
  reputationInterval: 6.048e8, // 7 days
  leaveClearInterval: 6.048e8, // 7 days
  minbfBet: 5,
  maxbfBet: 100,
  minbrBet: 5,
  maxbrBet: 200,
  statusLimit: 200,
  minReactionPrice: 20,
  maxReactionPrice: 30,
  temproomSlots: 3,
  temproomNamePrice: 350,
  temproomNameConfirmLimit: 3e5, // 5 mins
  temproomDeleteConfirmLimit: 3e5, // 5 mins
  temproleNamePrice: 350,
  temproleColorPrice: 300,
  temproleNameConfirmLimit: 3e5, // 5 mins
  temproleColorConfirmLimit: 3e5, // 5 mins
  temproleDeleteConfirmLimit: 3e5, // 5 mins
  temproleNoColorConfirmLimit: 3e5, // 5 mins
  checkInterval: 3.6e6, // 1 hour
  privateNameInterval: 3e5, // 5 mins
  privateLimitInterval: 3e5, // 5 mins
  privateOwnerTransferInterval: 3e5, // 5 mins
  faketime: 2.592e8, // 72 h
  pairroomName: '{nickname.1} 🖤 {nickname.2}',
  confirmEmojis: [emojis.verification.id, emojis.fail.id],
  brMinRandomres: 0,
  brMaxRandomres: 120,
  goldDoublerRoles: [ids.roles.onenitro],
  goldChestChances: {
    150: 35,
    300: 30,
    650: 20,
    850: 10,
    1050: 5
  },
  goldChestImages: {
    150: 'https://i.imgur.com/OLDyzIp.gif',
    300: 'https://i.imgur.com/f9xbNTp.gif',
    650: 'https://i.imgur.com/qdLp9Sg.gif',
    850: 'https://i.imgur.com/gH7wXxe.gif',
    1050: 'https://i.imgur.com/szQrM4d.gif'
  },
  itemChestChances: {
    [ids.goods.ticket]: 30,
    [ids.goods.temprole1d]: 20,
    [ids.goods.temprole3d]: 25,
    [ids.goods.temprole7d]: 5,
    [ids.goods.temproom7d]: 10,
    [ids.goods.hero7d]: 10
  },
  itemChestImages: {
    [ids.goods.ticket]: 'https://i.imgur.com/nUNo0RD.gif',
    [ids.goods.temprole1d]: 'https://i.imgur.com/Z6AbljU.gif',
    [ids.goods.temprole3d]: 'https://i.imgur.com/MnvVhaN.gif',
    [ids.goods.temprole7d]: 'https://i.imgur.com/bLvnKVn.gif',
    [ids.goods.temproom7d]: 'https://i.imgur.com/qaxhF2j.gif',
    [ids.goods.hero7d]: 'https://i.imgur.com/smHgCoh.gif'
  },
  brCoef: {
    0: 0,
    44: 1.25,
    70: 2,
    120: 10
  },
  emojis: {
    cy: emojis.gold, // Currency
    buy: emojis.check,
    donateCy: emojis.crystal, // Donate currency
    deleteMessage: emojis.wastebasket,
    status: [emojis.fail.display, emojis.verification.display],
    pageControl: [emojis.arrowBackward, emojis.arrowForward],
    previewMsg: {
      return: emojis.cross,
      getCode: emojis.question,
      newCode: emojis.pencil,
      editMessage: emojis.check
    }
  },
  chestDrops: {
    [ids.goods.ticket]: { id: ids.goods.ticket, chance: 30 },
    [ids.goods.temprole1d]: { id: ids.goods.temprole1d, chance: 25 },
    [ids.goods.temprole3d]: { id: ids.goods.temprole3d, chance: 20 },
    [ids.goods.temprole7d]: { id: ids.goods.temprole7d, chance: 15 },
    [ids.goods.hero7d]: { id: ids.goods.hero7d, chance: 5 },
    [ids.goods.temproom7d]: { id: ids.goods.temproom7d, chance: 5 }
  },
  timeSpelling: {
    w: 'н',
    d: 'д',
    h: 'ч',
    m: 'м',
    s: 'с'
  },
  permissions: {
    privateroom: {
      default: [
        {
          id: ids.roles.gender.null,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT | Permissions.FLAGS.VIEW_CHANNEL
        },
        {
          id: ids.roles.jumpmute,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT
        },
        {
          id: ids.roles.mute,
          allow: 0,
          deny: Permissions.FLAGS.SPEAK
        }
      ],
      creator: {
        allow:
          Permissions.FLAGS.CREATE_INSTANT_INVITE |
          Permissions.FLAGS.MANAGE_CHANNELS |
          Permissions.FLAGS.VIEW_CHANNEL |
          Permissions.FLAGS.CONNECT |
          Permissions.FLAGS.SPEAK |
          Permissions.FLAGS.STREAM |
          Permissions.FLAGS.USE_VAD |
          Permissions.FLAGS.PRIORITY_SPEAKER,
        deny:
          Permissions.FLAGS.MANAGE_ROLES |
          Permissions.FLAGS.MANAGE_WEBHOOKS |
          Permissions.FLAGS.MOVE_MEMBERS
      },
      everyone: {
        allow: Permissions.FLAGS.STREAM,
        deny: 0
      }
    },
    event: {
      default: [
        {
          id: ids.roles.gender.null,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT | Permissions.FLAGS.VIEW_CHANNEL
        },
        {
          id: ids.roles.jumpmute,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT
        },
        {
          id: ids.roles.mute,
          allow: 0,
          deny: Permissions.FLAGS.SPEAK
        }
      ],
      creator: {
        allow:
          Permissions.FLAGS.CREATE_INSTANT_INVITE |
          Permissions.FLAGS.MANAGE_CHANNELS |
          Permissions.FLAGS.MANAGE_ROLES |
          Permissions.FLAGS.VIEW_CHANNEL |
          Permissions.FLAGS.CONNECT |
          Permissions.FLAGS.SPEAK |
          Permissions.FLAGS.STREAM |
          Permissions.FLAGS.MUTE_MEMBERS |
          Permissions.FLAGS.DEAFEN_MEMBERS |
          Permissions.FLAGS.USE_VAD |
          Permissions.FLAGS.PRIORITY_SPEAKER,
        deny:
          Permissions.FLAGS.MANAGE_ROLES |
          Permissions.FLAGS.MANAGE_WEBHOOKS |
          Permissions.FLAGS.MOVE_MEMBERS
      },
      everyone: {
        allow: Permissions.FLAGS.STREAM,
        deny: 0
      }
    },
    loveroom: {
      default: [],
      member: {
        allow: Permissions.FLAGS.VIEW_CHANNEL | Permissions.FLAGS.CONNECT,
        deny: 0
      },
      everyone: {
        allow: 0,
        deny: Permissions.FLAGS.VIEW_CHANNEL | Permissions.FLAGS.CONNECT
      }
    },
    temproom: {
      default: [
        {
          id: ids.roles.gender.null,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT | Permissions.FLAGS.VIEW_CHANNEL
        },
        {
          id: ids.roles.jumpmute,
          allow: 0,
          deny: Permissions.FLAGS.CONNECT
        },
        {
          id: ids.roles.mute,
          allow: 0,
          deny: Permissions.FLAGS.SPEAK
        }
      ],
      member: {
        allow:
          Permissions.FLAGS.VIEW_CHANNEL |
          Permissions.FLAGS.CONNECT |
          Permissions.FLAGS.SPEAK |
          Permissions.FLAGS.STREAM |
          Permissions.FLAGS.MUTE_MEMBERS |
          Permissions.FLAGS.DEAFEN_MEMBERS |
          Permissions.FLAGS.USE_VAD |
          Permissions.FLAGS.PRIORITY_SPEAKER,
        deny: 0
      },
      everyone: {
        allow: 0,
        deny: Permissions.FLAGS.CONNECT
      }
    }
  }
}
