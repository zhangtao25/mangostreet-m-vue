import api from './api'

function getCurrent() {
  return new Promise((resolve, reject) => {
    api.get('/api/user/current').then(res => {
      resolve(res.data)
    })
  })
}
function uploadAvatar(file) {
  console.log(file)
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('image', file, file.name)
    api.post('/api/upload/user',formData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      resolve(res.data)
    })
  })
}

function editUserById(data) {
  console.log(data)
  return new Promise((resolve, reject) => {
    api.post('/api/user/edit/'+data.id,data.data).then(res => {
      resolve(res.data)
    })
  })
}
// function upload(file) {
//   const formData = new FormData()
//   formData.append('image', file, file.name)
//   return new Promise((resolve, reject) => {
//     api.post('/api/upload', formData,{
//       headers: { 'Content-Type': 'multipart/form-data' }
//     }).then(res => {
//       resolve(res.data)
//     })
//   })
// }

export default {
  getCurrent,
  uploadAvatar,
  editUserById
}
