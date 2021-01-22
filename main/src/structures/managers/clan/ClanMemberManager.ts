import Clan from '../../clan/Clan'
import ManagerBase from '../ManagerBase'

import { User } from '../../../utils/db'
import { RawClanMember } from '../../../utils/types'
import { default as ClanMember, ClanMemberData } from '../../clan/ClanMember'

export default class ClanMemberManager extends ManagerBase<
  ClanMember,
  ClanMemberData
  > {
  constructor(public clan: Clan, members?: ClanMemberData[]) {
    super(ClanMember)
    if (members) this.patch(members)
  }

  raw(): RawClanMember[] {
    return [...this.values()].map(v => ({ id: v.id, joinTick: v.joinTick, contributed: [] }))
  }

  add(id: string): ClanMember {
    const existing = this.get(id)
    if (existing) return existing

    User.updateOne({ userID: id }, { clanID: this.clan.id })
    const data = { id, joinTick: Date.now(), contributed: [] }
    this.clan.edit({ members: [...this.raw(), data] })
    return this.save(id, data)
  }

  patch(data: ClanMemberData[]) {
    this.clear()
    for (const officer of data) {
      const existing = this.get(officer.id)
      if (existing) existing.patch(officer)
      else this.set(officer.id, new ClanMember(this, officer))
    }
  }

  // awardClanExp(id: string, xpToAdd: number) {
  //   const month = new Date().getMonth()
  //   const clanMember = this.get(id)!
  //   if (!clanMember) return;
  //   clanMember.joinTick
  //   const memStatsIndex = clanMember.contributed.findIndex(c => c.month == month)
  //   const xpCont = clanMember.contributed[memStatsIndex].xpContribution + xpToAdd
  //   clanMember.contributed[memStatsIndex] = {
  //     ...clanMember.contributed[memStatsIndex],
  //     trophiesContributed: xpCont > 100 ? 1 : 0,
  //     xpContribution: xpCont > 100 ? xpCont - 100 : xpCont
  //   }
  //   this.save(id, clanMember)
  // }
}
