import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
interface PrivateRouteProps extends RouteProps {
  component: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const accessToken = localStorage.getItem('accessToken')

  return (
    <Route
      render={(props) => {
        const componentRender = <Component {...props} />
        const loginPage = <Redirect to='/login' />

        if (!accessToken) return loginPage
        return componentRender
      }}
      {...rest}
    />
  )
}

export default PrivateRoute
