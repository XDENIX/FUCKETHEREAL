export { Core } from 'discore.js'

import db from './utils/db'
import Client from './structures/Client'
import * as config from './config'

const client = new Client({
  commandOptions: {
    argsSeparator: ' ',
    ignoreBots: true,
    ignoreCase: true,
    ignoreSelf: true
  },
  token: config.internal.token,
  prefix: '',
  db
})

client.disableEvents()
client.processPrefixes()

export default client
