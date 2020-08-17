import { observable, action, decorate } from 'mobx'

class GlobalStore {
  isLoggedIn = false
  loading = false
  token = ''

  constructor() {
    this.token = JSON.parse(localStorage.getItem('token'))
    if (this.token) {
      this.isLoggedIn = true
    }
  }
  setLogin = (status) => {
    this.isLoggedIn = status
    localStorage.removeItem('token')
  }

  setUserInfo = (token) => {
    console.log(token)
    this.token = token
    localStorage.setItem('token', JSON.stringify(token))
  }
}
decorate(GlobalStore, {
  isLoggedIn: observable,
  loading: observable,
  token: observable,
  setLogin: action,
  setUserInfo: action,
})

export default GlobalStore
