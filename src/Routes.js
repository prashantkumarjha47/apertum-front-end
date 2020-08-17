import React, { Suspense, lazy } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ModuleRoutes from './modules'

const Login = lazy(() => import('./modules/login'))

const Routes = (props) => (
  <main>
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route path="/login" render={() => <Login {...props} />} />
          <Route path="/" component={ModuleRoutes} />
        </Switch>
      </Suspense>
    </Router>
  </main>
)

export default Routes
