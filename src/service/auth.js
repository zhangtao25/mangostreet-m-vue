import axios from 'axios'

function formatPostData(data) {
  let formData = new FormData();
  for (let i in data) {
    formData.append(i, data[i])
  }
  return formData
}

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
    axios.post('/api/login/signin',formatPostData(postData)).then(res => {
      resolve(res.data)
    })
  })
}



export default {
  authUsersByVerificationCode,
  authUsersByPasswordCode
}
