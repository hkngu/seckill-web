import request from './request'

export function login(customerId, password) {
  return request({
    url:'/login/do_login',
    method: 'post',
    data: {
      customerId,
      password
    }
  })
}
