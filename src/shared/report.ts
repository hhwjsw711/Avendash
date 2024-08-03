import { Entity, Fields } from 'remult'

@Entity('reports', {
  allowApiCrud: true,
})
export class Report {
  @Fields.cuid()
  id = ''
  @Fields.number()
  dissolvedoxygen = 0
  @Fields.number()
  turbidity = 0
  @Fields.number()
  waterPH = 0
  @Fields.number()
  waterT = 0
  @Fields.string()
  clientId = ''
  @Fields.date()
  detectedTime?: Date
  @Fields.createdAt()
  createdAt?: Date
}
