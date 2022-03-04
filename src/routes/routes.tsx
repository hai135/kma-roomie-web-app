import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Loading from '../components/Loading/Loading'

import HomeRoutes from './HomeRoutes'
import AuthenticationRoutes from './AuthenticationRoutes'
import RoomRoutes from './RoomRoutes'
import UserRoutes from './UserRoutes'

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <HomeRoutes />
        <AuthenticationRoutes />
        <RoomRoutes />
        <UserRoutes />
      </Router>
    </Suspense>
  )
}

export default Routes
