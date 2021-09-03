import { Redirect, Route } from 'react-router-dom'

import { useAuth } from 'src/hooks/useAuth'

export type PrivateRouteProps = any

export function PrivateRoute({
  component: Component,
  ...props
}: PrivateRouteProps) {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
