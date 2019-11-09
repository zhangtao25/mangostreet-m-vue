import axios from 'axios'

function authUsersByVerificationCode(phone, vcode) {
  return new Promise((resolve, reject) => {
    let postData = {
      'username': phone,
      'vcode': vcode
    };
    axios.post('/api/users/v',postData).then(res => {
      resolve(res)
    })
  })
}

function authUsersByPasswordCode() {
  return new Promise((resolve, reject) => {
    axios.post('/api/users/p',{}).then(res => {
      resolve(res)
    })
  })
}



export default {
  authUsersByVerificationCode,
  authUsersByPasswordCode
}
