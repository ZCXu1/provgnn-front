import request from '@/utils/request'

export function search(data) {
  return request({
    url: '/getsim',
    method: 'post',
    data
  })
}

