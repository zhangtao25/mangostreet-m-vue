import api from './api'

// function formatPostData(data) {
//   let formData = new FormData();
//   for (let i in data) {
//     formData.append(i, data[i])
//   }
//   return formData
// }

function getNote() {
  return new Promise((resolve, reject) => {
    api.get('/api/note/notes', {}).then(res => {
      resolve(res.data)
    })
  })
}

function getNoteById(id) {
  return new Promise((resolve, reject) => {
    api.get(`/api/note/${id}`, {}).then(res => {
      resolve(res.data)
    })
  })
}

function createNote(data) {
  return new Promise((resolve, reject) => {
    api.post('/api/note/create', data).then(res => {
      resolve(res.data)
    })
  })
}

function upload(file) {
  console.log(file)
  const formData = new FormData()
  formData.append('image', file, file.name)
  return new Promise((resolve, reject) => {
    api.post('/api/upload', formData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      resolve(res.data)
    })
  })
}




export default {
  getNote,
  createNote,
  upload,
  getNoteById
}
