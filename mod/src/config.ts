export const internal = {
  debug: false,
  token: '',
  prefix: '/',
  mongoURI: 'mongodb://127.0.0.1:27017/ethereal_mod'
}

export const ids = {
  guilds: {
    main: '728716141802815539',
    administration: '539086938964099074'
  },
  channels: {
    text: {
      logs: '750808292149690388',
      flood: '761614308840177694',
      mainChat: '761614282130587698',
      punishLogs: '750808080668950600',
      ticketLogs: '750807346904694824',
      punishConfirm: '782039118485782558',
      ticketApproval: '750807155510214664'
    },
    voice: {
      createPrivate: '737043501581074540'
    }
  },
  categories: {
    loverooms: '737307684792959017',
    temprooms: '737306176525697054',
    privaterooms: '728725005285851216'
  },
  roles: {
    button: '728723863348707338',

    hero: '747168601940688976',
    mute: '730203474662260819',
    event: '730204747898028202',
    light: '740370248943009894',
    yakuza: '760036493766426667',
    erotic: '730204758501228605',
    textmute: '730203474263801903', // tmute
    jumpmute: '730203473521541170', // jmute
    onenitro: '730204566594912397',
    symphony: '730204754952585226',
    sublunary: '740370283461869618',
    aesthetic: '730204757838266401',
    ghostshell: '740380086628515973',
    gamingPerson: '757526100082688000',
    creativePerson: '757525516054953984',

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
    phoenix: '744564449729445888', // helper
    elderEvent: '744564449729445888',
    keeperEvent: '744564783713615902',
    eventMod: '744563995771404408',
    eventElemental: '744563541633269791',

    eventBan: '730203472703783023',

    warns: ['730203471155822682', '730203471747481620'],

    gender: {
      null: '730204767590285364',
      unknown: '730204767426707467',
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
      'Counter-Strike: Global Offensive': '730204769410613279'
    }
  },
  chests: {
    gold: 0x01,
    item: 0x02
  },
  goods: {
    ticket: 0x001,
    temprole1d: 0x002,
    temprole3d: 0x004,
    temprole7d: 0x008,
    hero7d: 0x010,
    temproom7d: 0x020
  },
  punishments: {
    mute: 0x0001,
    warn: 0x0002,
    ban: 0x0004,
    kick: 0x0008,
    chatmute: 0x0010,
    jumpmute: 0x0020,
    unmute: 0x0040,
    chatunmute: 0x0080,
    jumpunmute: 0x0100,
    revokewarn: 0x0200,
    unban: 0x0400
  },
  ticketStatuses: {
    closed: 0,
    active: 1,
    pending: 2,
    verification: 3
  }
}

export const helpRoles = {
  '788387455022923787': [ids.roles.owner, ids.roles.orion],
  '788390498524069888': [ids.roles.astral, ids.roles.ghost],
  '788392438933880860': [ids.roles.phoenix]
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
  empty: '691712892923543593',
  roles: '697223345049042964',
  verification: '698596668769173645',
  fail: '698590387002146816',
  gold: '741089723703099512',
  medal: '753016395612291084',
  crystal: '759260673439301664',
  places: {
    first: '691712892998778920',
    second: '691712893179134013',
    third: '691712893124608052'
  }
}

export const colors = {
  embed: 0x2f3136
}

export const timezones = {
  moscow: 'Europe/Moscow'
}

export const ticks = {
  commandDelete: 5e2,
  msgDeletion: 3e4, // 30 secs
  errMsgDeletion: 1.5e4, // 15 secs
  checkInterval: 3.6e6, // 1 hour
  warnTime: 6.048e8, // 1 week
  warnBanTime: 6.048e8 // 1 week
}

export const access = {
  commands: {
    say: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix,
      ids.roles.elderEvent,
      ids.roles.keeperEvent
    ],
    eventban: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.elderEvent,
      ids.roles.keeperEvent
    ],
    prune: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost
    ],
    kick: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    mute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    chatmute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    move: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    ban: [ids.roles.owner, ids.roles.orion, ids.roles.sirius, ids.roles.astral],
    warn: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    eunban: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    unmute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    chatunmute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    unban: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    cwarn: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    warnlist: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    mutelist: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    banlist: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    removerole: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    erotic: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    aesthetic: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    yakuza: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.elderEvent,
      ids.roles.keeperEvent,
      ids.roles.eventMod
    ],
    light: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    sublunary: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    symphony: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    ghostshell: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    girl: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    boy: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    unknown: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    gamingPerson: [ids.roles.owner, ids.roles.orion, ids.roles.sirius],
    creativePerson: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    stats: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.phoenix,
      ids.roles.ghost
    ],
    closeTicketAccess: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ]
  }
}

export const meta = {
  workingGuild: ids.guilds.main,
  defaultColor: colors.embed,
  defaultTimezone: timezones.moscow,
  lorePageSize: 5,
  banlistPageSize: 10,
  warnlistPageSize: 10,
  allowedGuilds: [ids.guilds.main, ids.guilds.administration],
  confirmEmojis: [emojis.verification, emojis.fail],
  unprunableChannels: [
    '737004105746350220',
    '737004223232999514',
    '737008625494786591',
    '758607190914760707',
    '737008768688324640',
    '737008726237642808',
    '737037101081690264',
    '737034627088384140',
    '737040143172632628',
    '737037176184766484'
  ],
  modCategories: ['737393564824240250', '737393897348661359'],
  modRoles: [
    ids.roles.owner,
    ids.roles.orion,
    ids.roles.sirius,
    ids.roles.astral,
    ids.roles.ghost,
    ids.roles.phoenix
  ],
  unmovableRoles: [
    ids.roles.owner,
    ids.roles.orion,
    ids.roles.sirius,
    ids.roles.astral,
    ids.roles.ghost
  ],
  unremovableRoles: [
    ids.roles.owner,
    ids.roles.button,
    ids.roles.orion,
    ids.roles.sirius,
    ids.roles.astral,
    ids.roles.ghost,
    ids.roles.phoenix,
    ids.roles.elderEvent,
    ids.roles.keeperEvent,
    ids.roles.eventMod,
    ids.roles.eventElemental,
    ids.roles.warns[0],
    ids.roles.warns[1],
    ids.roles.eventBan,
    ids.roles.jumpmute,
    ids.roles.textmute,
    ids.roles.mute,
    ids.roles.immortalSponsor,
    ids.roles.legendarySponsor,
    ids.roles.diamondSponsor,
    ids.roles.onenitro,
    ids.roles.hero
  ],
  permanentlyUnremovableRoles: [ids.roles.owner, ids.roles.button],
  emojis: {
    cy: emojis.gold, // Currency
    donateCy: emojis.crystal, // Donate currency
    status: [emojis.fail, emojis.verification],
    pageControl: [emojis.arrowBackward, emojis.arrowForward],
    supportAssessment: [
      '704173123901325375',
      '704173124283006985',
      '704173124106846239',
      '704173124220092458',
      '704173124102651973'
    ],
    punishment: {
      [ids.punishments.mute]: '691712893250699271',
      [ids.punishments.warn]: '691712893003104276',
      [ids.punishments.ban]: '691712892805840947'
    },
    previewMsg: {
      return: emojis.cross,
      getCode: emojis.question,
      newCode: emojis.pencil,
      editMessage: emojis.check
    }
  },
  timeSpelling: {
    w: 'н',
    d: 'д',
    h: 'ч',
    m: 'м',
    s: 'с'
  },
  pluralTime: {
    w: [' неделя', ' недели', ' недель'],
    d: [' день', ' дня', ' дней'],
    h: [' час', ' часа', ' часов'],
    m: [' минута', ' минуты', ' минут'],
    s: [' секунда', ' секунды', ' секунд']
  }
}
