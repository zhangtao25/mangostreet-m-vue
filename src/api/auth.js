import { axios } from './../utils/request'


export function login (parameter) {
  return axios({
    url: '/api/v1/auth/2',
    method: 'post',
    data: parameter
  })
}

export default {
  login
}
