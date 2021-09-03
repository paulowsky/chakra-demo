import { Switch, Route } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { RecoveryPassword } from 'src/pages/RecoveryPassword'
import { NotFound404 } from 'src/pages/NotFound'
import { Dashboard } from 'src/pages/Dashboard'
import { SignIn } from 'src/pages/SignIn'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recovery-password" exact component={RecoveryPassword} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <Route component={NotFound404} />
    </Switch>
  )
}
