import { remultExpress } from 'remult/remult-express'
import { Report } from '../shared/report'

export const api = remultExpress({
  entities: [Report],
})
