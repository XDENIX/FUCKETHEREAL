import { EventEmitter } from 'events'
import { Mongo, MongoModel, Document } from 'discore.js'

import { config } from '../main'
import { VoiceActivity } from '../managers/VoiceActivityManager'
import { JoinInvalidatedReason } from '../structures/Invites/Invites';

const db = new Mongo(config.internal.mongoURI)

//#region Models
EventEmitter.defaultMaxListeners = 40;
db.addModel('users', {
  userID: { type: Mongo.Types.String, default: undefined },
  clanID: { type: Mongo.Types.String, default: undefined },
  status: { type: Mongo.Types.String, default: undefined },
  gameroles: { type: Mongo.Types.Boolean, default: true },

  reputation: { type: Mongo.Types.Number, default: 0 },
  repUsers: { type: Mongo.Types.Object, default: {} },

  inventory: { type: Mongo.Types.Object, default: {} },

  boostCount: { type: Mongo.Types.Number, default: 0 },
  boostTimeout: { type: Mongo.Types.Number, default: 0 },

  xp: { type: Mongo.Types.Number, default: 0 },
  lvl: { type: Mongo.Types.Number, default: 1 },

  background: { type: Mongo.Types.Number, default: 0 },
  backgrounds: { type: Mongo.Types.Array, default: [] },

  goldChests: { type: Mongo.Types.Number, default: 0 },
  itemChests: { type: Mongo.Types.Number, default: 0 },
  lastChest: { type: Mongo.Types.Number, default: -1 },

  gold: { type: Mongo.Types.Number, default: 0 },
  crystals: { type: Mongo.Types.Number, default: 0 },

  messageCount: { type: Mongo.Types.Number, default: 0 },
  voiceTime: { type: Mongo.Types.Number, default: 0 },
  voiceActivity: { type: Mongo.Types.Array, default: [] },

  leaveTick: { type: Mongo.Types.Number, default: undefined },
  lastRepTick: { type: Mongo.Types.Number, default: undefined },
  lastMsgXpTick: { type: Mongo.Types.Number, default: undefined },
  lastTimelyTick: { type: Mongo.Types.Number, default: undefined }
})
db.addModel('pairs', {
  roomID: { type: Mongo.Types.String, default: undefined },
  pair: { type: Mongo.Types.Array, default: [] }
})
db.addModel('clans', {
  clanID: { type: Mongo.Types.String, default: undefined },

  lvl: { type: Mongo.Types.Number, default: 1 },

  ownerID: { type: Mongo.Types.String, default: undefined },

  officers: { type: Mongo.Types.Array, default: [] },
  members: { type: Mongo.Types.Array, default: [] },

  name: { type: Mongo.Types.String, default: undefined },
  description: { type: Mongo.Types.String, default: undefined },
  flag: { type: Mongo.Types.String, default: undefined },
  color: { type: Mongo.Types.Number, default: undefined },
  roleID: { type: Mongo.Types.String, default: undefined }
})
db.addModel('closes', {
  roomID: { type: Mongo.Types.String, default: undefined },
  chatID: { type: Mongo.Types.String, default: undefined },
  ownerID: { type: Mongo.Types.String, default: undefined }
})
db.addModel('events', {
  roomID: { type: Mongo.Types.String, default: undefined },
  chatID: { type: Mongo.Types.String, default: undefined },
  ownerID: { type: Mongo.Types.String, default: undefined }
})
db.addModel('privaterooms', {
  roomID: { type: Mongo.Types.String, default: undefined },
  ownerID: { type: Mongo.Types.String, default: undefined }
})
db.addModel('plants', {
  userID: { type: Mongo.Types.String, default: undefined },
  amount: { type: Mongo.Types.Number, default: undefined },
  tick: { type: Mongo.Types.Number, default: undefined }
})
db.addModel('temproles', {
  userID: { type: Mongo.Types.String, default: undefined },
  roleID: { type: Mongo.Types.String, default: undefined },
  itemID: { type: Mongo.Types.Number, default: undefined },
  endTick: { type: Mongo.Types.Number, default: undefined }
})
db.addModel('temprooms', {
  userID: { type: Mongo.Types.String, default: undefined },
  roomID: { type: Mongo.Types.String, default: undefined },
  itemID: { type: Mongo.Types.Number, default: undefined },
  slots: { type: Mongo.Types.Number, default: config.meta.temproomSlots },
  endTick: { type: Mongo.Types.Number, default: undefined }
})
db.addModel('verificationmessages', {
  userID: { type: Mongo.Types.String, default: undefined },
  messageID: { type: Mongo.Types.String, default: undefined },
  channelID: { type: Mongo.Types.String, default: undefined },
  emoji: { type: Mongo.Types.String, default: undefined }
})
db.addModel('imgrequests', {
  msgID: { type: Mongo.Types.String, default: undefined },
  type: { type: Mongo.Types.Number, default: undefined },
  userID: { type: Mongo.Types.String, default: undefined }
})
//#region Invites System
db.addModel('customInvites', {
  amount: Mongo.Types.Number,
  reason: Mongo.Types.String,
  cleared: { type: Mongo.Types.Boolean, default: false },
  createdAt: { type: Mongo.Types.Date, default: Date.now() },
  guildId: Mongo.Types.String,
  memberId: Mongo.Types.String,
  creatorId: Mongo.Types.String
})
db.addModel('inviteCodes', {
  code: Mongo.Types.String,
  reason: Mongo.Types.String,
  maxAge: Mongo.Types.Number,
  uses: Mongo.Types.Number,
  temporary: Mongo.Types.Boolean,
  clearedAmount: { type: Mongo.Types.Number, default: '0' },
  isVanity: { type: Mongo.Types.Boolean, default: false },
  isWidget: { type: Mongo.Types.Boolean, default: false },
  createdAt: { type: Mongo.Types.Number, default: Date.now() },
  guildId: Mongo.Types.String,
  channelId: Mongo.Types.String,
  inviterId: Mongo.Types.String
})
db.addModel('joins', {
  //1 - fake
  //2 - leave
  invalidatedReason: Mongo.Types.Number,
  cleared: { type: Mongo.Types.Boolean, default: false },
  createdAt: { type: Mongo.Types.Number, default: Date.now() },
  guildId: Mongo.Types.String,
  memberId: Mongo.Types.String,
  exactMatchCode: Mongo.Types.String
})
db.addModel('questions', {
  question: { type: Mongo.Types.String, default: undefined },
  answer: { type: Mongo.Types.String, default: undefined },
  sent: { type: Mongo.Types.Boolean, default: false }
})

//#endregion

//#region ModelsInterface
export interface IUser extends Document {
  userID: string
  clanID: string | undefined
  status: string | undefined
  gameroles: boolean

  reputation: number
  repUsers: { id: string; time: number }

  inventory: { [key: string]: number }

  boostCount: number
  boostTimeout: number

  xp: number
  lvl: number

  background: number
  backgrounds: number[]

  goldChests: number
  itemChests: number
  lastChest: number

  gold: number
  crystals: number

  messageCount: number
  voiceTime: number
  voiceActivity: VoiceActivity[]

  leaveTick: number
  lastRepTick: number
  lastMsgXpTick: number
  lastTimelyTick: number
}
export interface IPair extends Document {
  roomID: string
  pair: string[]
}
export interface IClan extends Document {
  clanID: string

  lvl: number

  ownerID: string
  officers: { id: string; tick: number }[]
  members: {
    id: string
    joinTick: number
    contributed: {
      month: number
      trophiesContributed: number
      xpContribution: number
    }[]
  }[]

  name: string
  description: string | undefined
  flag: string | undefined
  color: number | undefined
  roleID: string | undefined
  roomID: string
  chatID: string
}
export interface IPlant extends Document {
  userID: string
  amount: number
  tick: number
}
export interface IClose extends Document {
  roomID: string
  chatID: string
  ownerID: string
}
export interface IEvent extends Document {
  roomID: string
  chatID: string
  ownerID: string
}
export interface IPrivateRoom extends Document {
  roomID: string
  ownerID: string
}
export interface ITemprole extends Document {
  userID: string
  roleID: string
  itemID: number
  endTick: number
}
export interface ITemproom extends Document {
  userID: string
  roomID: string
  itemID: number
  slots: number
  endTick: number
}
export interface IVerificationMessage extends Document {
  userID: string
  messageID: string
  channelID: string
  emoji: string
}
export interface IimgRequest extends Document {
  msgID: string
  type: number
  userID: string
}

//#region InterfacesInvites
export interface ICustomInvites extends Document {
  amount: number,
  reason: string,
  cleared: boolean,
  createdAT: Date,
  guildId: string,
  memberId: string,
  creatorId: string
}
export interface IInviteCodes extends Document {
  code: string,
  reason: string,
  maxAge: number | null,
  uses: number | null,
  temporary: boolean | null,
  clearedAmount: number,
  isVanity: boolean,
  isWidget: boolean,
  createdAt?: number,
  guildId: string,
  channelId: string | null,
  inviterId: string | null
}

export interface IJoins extends Document {
  invalidatedReason: JoinInvalidatedReason | null,
  cleared: boolean,
  createdAt: number,
  guildId: string,
  memberId: string,
  exactMatchCode: string
}
//#endregion
export interface IQuestion extends Document {
  question: string
  answer: string
  sent: boolean
}

//#endregion

export const User = db.getCollection('users') as MongoModel<IUser>
export const Pair = db.getCollection('pairs') as MongoModel<IPair>
export const Clan = db.getCollection('clans') as MongoModel<IClan>
export const Plant = db.getCollection('plants') as MongoModel<IPlant>
export const Close = db.getCollection('closes') as MongoModel<IClose>
export const Event = db.getCollection('events') as MongoModel<IEvent>
export const Temprole = db.getCollection('temproles') as MongoModel<ITemprole>
export const Temproom = db.getCollection('temprooms') as MongoModel<ITemproom>
export const PrivateRoom = db.getCollection('privaterooms') as MongoModel<IPrivateRoom>
export const VerificationMessage = db.getCollection('verificationmessages') as MongoModel<IVerificationMessage>
export const ImgRequest = db.getCollection('imgrequests') as MongoModel<IimgRequest>
export const Question = db.getCollection('questions') as MongoModel<IQuestion>

//Invites
export const CustomInvites = db.getCollection('customInvites') as MongoModel<ICustomInvites>
export const InviteCodes = db.getCollection('inviteCodes') as MongoModel<IInviteCodes>
export const Joins = db.getCollection('joins') as MongoModel<IJoins>

export default db
