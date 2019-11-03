import axios from 'axios'

function login() {
  return new Promise((resolve, reject) => {
    axios.post('/api/login',{}).then(res => {
      resolve(res)
    })
  })
}

export default {
  login
}
