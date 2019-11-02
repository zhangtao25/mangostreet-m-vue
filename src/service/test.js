import axios from 'axios'

function mock01() {
  return new Promise((resolve, reject) => {
    axios.get('/test').then(res => {
      resolve(res)
      // console.log(res)
    })
  })
}

export default {
  mock01
}
