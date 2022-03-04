import { AccountModel } from './Account'
import { RoomInformationModel } from './RoomInformation'
import { RoomAddressModel } from './RoomAddress'
import { RoomExpenseModel } from './RoomExpense'

export interface RoomModel {
  id: number
  admin: AccountModel
  user: AccountModel
  roomInformation: RoomInformationModel
  roomExpense: RoomExpenseModel
  roomAddress: RoomAddressModel
  // roomImages: RoomImageModel
  roomImages: any
  utilities: Array<UtilityModel>
}
