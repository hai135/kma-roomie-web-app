import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import PublicRoute from '../guards/PublicRoute'
import { PATH } from '../constants/path'

const Landing = lazy(() => import('../pages/Landing/Landing'))

const HomeRoutes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute exact={true} path={PATH.HOME} component={Landing} />
    </Switch>
  )
}

export default HomeRoutes
