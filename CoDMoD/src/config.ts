export const internal = {
  debug: false,
  token: '',
  prefix: '/',
  mongoURI: 'mongodb://127.0.0.1:27017/ethereal_mod'
}

export const ids = {
  guilds: {
    main: ' ',
    administration: ' '
  },
  channels: {
    text: {
      logs: ' ',
      mainChat: ' ',
      punishLogs: ' ',
      punishConfirm: ' '
    },
    voice: {
      createPrivate: ' '
    }
  },
  categories: {
    loverooms: ' ',
    temprooms: ' ',
    privaterooms: ' '
  },
  roles: {
    button: ' ',

    hero: ' ',
    mute: ' ',
    event: ' ',
    light: ' ',
    yakuza: ' ',
    erotic: ' ',
    textmute: ' ', // tmute
    jumpmute: ' ', // jmute
    onenitro: ' ',
    symphony: ' ',
    sublunary: ' ',
    aesthetic: ' ',
    ghostshell: ' ',
    gamingPerson: ' ',
    creativePerson: ' ',

    clans: ' ',
    temproles: ' ',

    immortalSponsor: ' ',
    legendarySponsor: ' ',
    diamondSponsor: ' ',

    owner: ' ',
    orion: ' ',
    sirius: ' ', // admin
    astral: ' ', // jr admin
    ghost: ' ', // moderator
    phoenix: ' ', // helper
    elderEvent: ' ',
    keeperEvent: ' ',
    eventMod: ' ',
    eventElemental: ' ',

    eventBan: ' ',


    gender: {
      null: ' ',
      unknown: ' ',
      male: ' ',
      female: ' '
    },
    games: {
      Valorant: ' ',
      Minecraft: ' ',
      Overwatch: ' ',
      'Osu!': ' ',
      'Dota 2': ' ',
      'League of Legends': ' ',
      "PLAYERUNKNOWN'S BATTLEGROUNDS": ' ',
      'Counter-Strike: Global Offensive': ' '
    }
  },
  punishments: {
    mute: 0x0001,
    ban: 0x0002,
    kick: 0x0004,
    chatmute: 0x0008,
    jumpmute: 0x0010,
    unmute: 0x0020,
    chatunmute: 0x0040,
    jumpunmute: 0x0080,
    unban: 0x0100,
  }
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
  empty: ' ',
  roles: ' ',
  verification: ' ',
  fail: ' ',
  gold: ' ',
  medal: ' ',
  crystal: ' ',
  places: {
    first: ' ',
    second: ' ',
    third: ' '
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
}

export const access = {
  commands: {
    unmute: [
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
    prune: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost
    ],

    mute: [
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
    kick: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
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
    chatmute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral,
      ids.roles.ghost,
      ids.roles.phoenix
    ],
    chatunmute: [
      ids.roles.owner,
      ids.roles.orion,
      ids.roles.sirius,
      ids.roles.astral
    ],
    ban: [ids.roles.owner, ids.roles.orion, ids.roles.sirius, ids.roles.astral],

  }
}

export const meta = {
  workingGuild: ids.guilds.main,
  defaultColor: colors.embed,
  defaultTimezone: timezones.moscow,
  lorePageSize: 5,
  banlistPageSize: 10,
  allowedGuilds: [ids.guilds.main, ids.guilds.administration],
  confirmEmojis: [emojis.verification, emojis.fail],
  unprunableChannels: [
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' '
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
    status: [emojis.fail, emojis.verification],
    pageControl: [emojis.arrowBackward, emojis.arrowForward],
    punishment: {
      [ids.punishments.mute]: ' ',
      [ids.punishments.ban]: ' '
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
