import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '../guards/PrivateRoute'
import { PATH } from '../constants/path'
import PublicRoute from '../guards/PublicRoute'

const CreateRoom = lazy(() => import('../pages/Room/CreateRoom/CreateRoom'))
const RoomList = lazy(() => import('../pages/Room/RoomList/RoomList'))
const RoomDetail = lazy(() => import('../pages/Room/RoomDetail/RoomDetail'))

const HomeRoutes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact={true} path={PATH.ROOM.CREATE_ROOM} component={CreateRoom} />
      <PublicRoute exact={true} path={PATH.ROOM.LIST_ROOM} component={RoomList} />
      <PrivateRoute exact={true} path={PATH.ROOM.ROOM_DETAIL} component={RoomDetail} />
    </Switch>
  )
}

export default HomeRoutes
