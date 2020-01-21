import { axios } from './../utils/request'


export function login (parameter) {
  return axios({
    url: '/api/v1/user/2',
    method: 'get',
    data: parameter
  })
}

export default {
  login
}
