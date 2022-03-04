import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import PublicRoute from '../guards/PublicRoute'
import { PATH } from '../constants/path'

const Login = lazy(() => import('../pages/Authentication/Login/Login'))
const Register = lazy(() => import('../pages/Authentication/Register/Register'))

const AuthenticationRoutes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute exact={true} path={PATH.AUTHENTICATION.LOGIN} component={Login} />
      <PublicRoute exact={true} path={PATH.AUTHENTICATION.REGISTER} component={Register} />
    </Switch>
  )
}

export default AuthenticationRoutes
