import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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



function authUsersByPasswordCode(postData) {
  return new Promise((resolve, reject) => {
    let fd = new FormData()
    fd.append("username",postData.username)
    fd.append("password",postData.password)
    axios.post('/api/login/signin',fd).then(res => {
      resolve(res)
    })
  })
}



export default {
  authUsersByVerificationCode,
  authUsersByPasswordCode
}
