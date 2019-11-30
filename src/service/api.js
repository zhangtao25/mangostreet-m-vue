import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(
  config => {
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    const userToken = localStorage.getItem('token')
    if (userToken) {
      config.headers.common['X-User-Token'] = userToken
    }
    config.transformRequest = [
      function(data) {
      console.log(data,process,process.client)
        if (data instanceof FormData) {
          // 如果是FormData就不转换
          console.log("不")
          return data
        }
        console.log("转")
        data = qs.stringify(data)
        return data
      }
    ];
    return config
  }, function (error) {
    return Promise.reject(error)
  }
);

export default axios
