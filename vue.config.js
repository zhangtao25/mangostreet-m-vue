module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api/v1' : '/'
        }
      },
    }
  }
}
