import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthRoutes from '../globals/hoc/AuthRoutes'

const Users = lazy(() => import('./users'))

const Moduleroutes = (props) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" exact render={() => <Users {...props} />} />
        <Route path="/users" render={() => <Users {...props} />} />
      </Switch>
    </Suspense>
  )
}

export default AuthRoutes(Moduleroutes)
