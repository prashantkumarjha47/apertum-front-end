import React, { Component } from 'react'
import { observer } from 'mobx-react'
import RequestService from '../../services/RequestServices'
import { decorate, observable, action } from 'mobx'
import { Card, Button } from 'antd'
import './Users.scss'

class Users extends Component {
  userList = []

  componentDidMount() {
    this.getUserList()
  }
  getUserList = async () => {
    try {
      const userList = await RequestService.getUser()
      this.userList = userList
    } catch (error) {}
  }

  filterUser = () => {
    const userList = this.userList.filter(
      (user) => user.age >= 20 && user.age < 30 && user.firstName.length >= 10
    )
    this.userList = userList
  }

  render() {
    return (
      <div className="users">
        <div className="head-btn">
          <Button type="primary" onClick={this.filterUser}>
            Filter
          </Button>
          <Button onClick={this.getUserList}>Reset</Button>
        </div>
        <Card className="user-list-card lst-header">
          <div className="row">
            <div>Account ID</div>
            <div>First Name</div>
            <div>Last Name</div>
            <div>Age</div>
          </div>
        </Card>
        {this.userList.map((user) => (
          <Card className="user-list-card">
            <div className="row">
              <div>{user.accountId}</div>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{user.age}</div>
            </div>
          </Card>
        ))}
      </div>
    )
  }
}
decorate(Users, {
  userList: observable,
  getUserList: action,
})

export default observer(Users)
