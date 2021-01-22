export const internal = {
  debug: false,
  token: 'Nzc5MzQ5ODE5Mzk5NDcxMTE0.X7fQFA.-E2vThIbzWXCOMfPxLu26UFU-go',
  prefix: '/',
  mongoURI: 'mongodb://127.0.0.1:27017/ethereal_mod'
}

export const ids = {
  guilds: {
    main: '783801524727709756',
    administration: ''
  },
  channels: {
    text: {
      logs: '783801527466459136',
      flood: '783801524999421968',
      mainChat: '783801524999421967',
      punishLogs: '783801527466459136',
      ticketLogs: '',
      punishConfirm: '783801527248486449',
      ticketApproval: '783801527248486447'
    },
    voice: {
      createPrivate: '783801525885206538'
    }
  },
  categories: {
    loverooms: '783801526396649533',
    temprooms: '783801526195191836',
    privaterooms: '783801525688336423'
  },
  roles: {
    button: '783801524840824840',

    hero: '783801524810809406',
    mute: '783801524810809409',
    event: '783801524764934149',
    light: '',
    yakuza: '',
    erotic: '783801524752744477',
    textmute: '783801524810809410', // tmute
    jumpmute: '783801524824178728', // jmute
    onenitro: '783801524810809407',
    symphony: '783801524764934146',
    sublunary: '',
    aesthetic: '783801524764934144',
    ghostshell: '783801524764934148',
    gamingPerson: '',
    creativePerson: '',

    clans: '',
    temproles: '',

    immortalSponsor: '783801524840824837',
    legendarySponsor: '783801524824178737',
    diamondSponsor: '783801524824178736',

    owner: '783801524840824838',
    orion: '783801524840824836',
    sirius: '783801524840824835', // admin
    astral: '783801524840824833', // jr admin
    ghost: '783801524840824832', // moderator
    phoenix: '783801524824178734', // helper
    elderEvent: '783801524824178735',
    keeperEvent: '',
    eventMod: '783801524824178733',
    eventElemental: '',

    eventBan: '783801524824178729',

    warns: ['783801524824178731', '783801524824178730'],

    gender: {
      null: '783801524752744472',
      unknown: '783801524752744473',
      male: '783801524752744474',
      female: '783801524752744475'
    },
    games: {
      Valorant: '783801524727709765',
      Minecraft: '783801524727709764',
      Overwatch: '783801524727709761',
      'Osu!': '783801524752744471',
      'Dota 2': '783801524752744469',
      'League of Legends': '783801524727709760',
      "PLAYERUNKNOWN'S BATTLEGROUNDS": '783801524752744468',
      'Counter-Strike: Global Offensive': '783801524752744470'
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
  modCategories: ['783801525486223367', '783801525688336415'],
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
