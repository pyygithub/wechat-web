const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};


module.exports = {

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("_conf", resolve("config"));
  },
  devServer: {
    proxy: {
      "/api": {
        //将www.exaple.com印射为/api
        target: "http://localhost:8090", // 接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "" //需要rewrite的,
        }
      }
    }
  }
};
