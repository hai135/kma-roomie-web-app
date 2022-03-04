import { Role } from './Role'

export interface AccountModel {
  id: number
  username: string
  email: string
  locked: boolean
  roles: Array<Role>
}
