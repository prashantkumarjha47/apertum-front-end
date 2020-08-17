import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import Layout from '../layout'

export default function Protected(Children) {
  class AuthenticatedComponent extends Component {
    render() {
      const { isLoggedIn } = this.props.globals
      return (
        <div className="authComponent">
          {isLoggedIn ? (
            <Layout>
              <Children {...this.props} />
            </Layout>
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      )
    }
  }
  return inject('globals')(observer(AuthenticatedComponent))
}
