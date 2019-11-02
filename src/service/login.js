import axios from 'axios'

function login() {
  return new Promise((resolve, reject) => {
    axios.post('/login',{}).then(res => {
      resolve(res)
    })
  })
}

export default {
  login
}
