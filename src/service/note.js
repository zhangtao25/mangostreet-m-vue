import axios from 'axios'

function formatPostData(data) {
  let formData = new FormData();
  for (let i in data) {
    formData.append(i, data[i])
  }
  return formData
}

axios.interceptors.request.use(
  config => {
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    const userToken = localStorage.getItem('token')
    if (userToken) {
      config.headers.common['X-User-Token'] = userToken
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)

function getNote() {
  return new Promise((resolve, reject) => {
    axios.get('/api/notes', {}).then(res => {
      resolve(res.data)
    })
  })
}

function createNote(data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/note/create', formatPostData(data)).then(res => {
      resolve(res.data)
    })
  })
}

function upload(file) {
  const formData = new FormData()
  formData.append('image', file, file.name)
  return new Promise((resolve, reject) => {
    axios.post('/api/upload', formData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      resolve(res.data)
    })
  })
}


export default {
  getNote,
  createNote,
  upload
}
