import request from '@/utils/request'

export function logout() {
    return request({
      url: '/vue-admin-template/user/logout',
      method: 'post'
    })
}

export const getUser= () => {
  return request({
    url: '/api/user',
    method: 'get'
  })
};
