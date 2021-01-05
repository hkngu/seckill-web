import request from './request'
export function fetchList() {
  return request({
    url: '/goods/goods_list',
    method: 'get'
  })
}
