module.exports = {
  devServer:{
    host:'localhost',
    port:8090,
    proxy:{
      '/api':{
        // target:'http://mall-pre.springboot.cn',
        target:'http://127.0.0.1:8088',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}