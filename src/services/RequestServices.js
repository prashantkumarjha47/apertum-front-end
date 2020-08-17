import RestfulProvider from '../globals/restfulProvider/RestfulProvider'

class RequestServices {
  login = (data) => {
    return RestfulProvider.post('api/user/login', data)
  }
  getUser = (data) => {
    return RestfulProvider.get('api/users')
  }
}
export default new RequestServices()
