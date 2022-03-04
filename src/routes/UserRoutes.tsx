import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import { PATH } from '../constants/path'

import PrivateRoute from '../guards/PrivateRoute'

const User = lazy(() => import('../pages/User/User'))
const EditProfile = lazy(() => import('../pages/User/EditProfile/EditProfile'))

const UserRoutes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact={true} path={PATH.USER.PROFILE} component={User} />
      <PrivateRoute exact={true} path={PATH.USER.EDIT_PROFILE} component={EditProfile} />
    </Switch>
  )
}

export default UserRoutes
