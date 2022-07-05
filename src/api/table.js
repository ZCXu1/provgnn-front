import request from '@/utils/request'

export function search(data) {
  return request({
    url: '/getsim',
    method: 'post',
    data
  })
}

export function search2(data) {
  return request({
    url: '/getjudge',
    method: 'post',
    data
  })
}
