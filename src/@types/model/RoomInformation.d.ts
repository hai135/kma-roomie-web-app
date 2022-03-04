import { RoomTypeModel } from './RoomType'

export interface RoomInformationModel {
  id: number
  name: string
  roomArea: number
  roomCapacity: number
  roomType: RoomTypeModel
}
