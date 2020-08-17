import React, { Component } from 'react'
import { Form, Icon, Input, Button, Avatar, message } from 'antd'
import LoginHeader from '../../globals/components/loginHeader/LoginHeader'
import './Login.scss'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import RequestService from '../../services/RequestServices'

class Login extends Component {
  componentDidMount() {
    console.log('Login')
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.globals.setLogin(true)
        RequestService.login({
          accountId: values.username,
          pswd: values.password,
        })
          .then((resp) => {
            console.log(resp)
            if (resp && resp.token) {
              this.props.globals.setUserInfo(resp.token)
              this.props.history.push('/users')
            } else {
              message.error('User Not Found')
            }
          })
          .catch((err) => message.error('User Not Found'))
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <React.Fragment>
        <LoginHeader />
        <div className="login">
          <div className="login-card">
            <Avatar size={64} icon="user" />
            <div className="login-title">Sign in</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <div className="reg-submit">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Sign in
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Form.create()(inject('globals')(withRouter(observer(Login))))
