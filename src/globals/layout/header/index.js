import React from 'react'
import { Layout, Avatar, Popover } from 'antd'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './Header.scss'

const { Header } = Layout

const MainHeader = ({ globals, history }) => {
  const logout = () => {
    globals.setLogin(false)
  }

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ cursor: 'pointer' }} onClick={logout}>
        Logout
      </span>
    </div>
  )
  return (
    <Header className="header">
      <div className="user-avt">
        <Popover placement="bottom" content={content} trigger="click">
          <Avatar icon="user" />
        </Popover>
      </div>
    </Header>
  )
}

export default inject('globals')(withRouter(observer(MainHeader)))
