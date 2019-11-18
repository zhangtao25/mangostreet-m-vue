import axios from 'axios'

function getNote() {
  return new Promise((resolve, reject) => {
    axios.get('/api/notes',{}).then(res => {
      resolve(res.data)
    })
  })
}

export default {
  getNote
}
