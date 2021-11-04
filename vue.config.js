module.exports = {
 // 公共路径(必须有的)
 publicPath: "./",
 // 输出文件目录
 outputDir: "dist",
 // 静态资源存放的文件夹(相对于ouputDir)
 assetsDir: "static",
 // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
 lintOnSave:false,
 // 我用的only，打包后小些
 runtimeCompiler: false,
 productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
 devServer: {
   open: true,  // npm run serve后自动打开页面
   host: 'localhost',  // 匹配本机IP地址(默认是0.0.0.0)
   port: 8080, // 开发服务器运行端口号
   proxy: null,
 },
 chainWebpack: config => {
  if (process.env.use_analyzer) {     // 分析
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
 },
 css: {
  loaderOptions: {
    less: {
      // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。   
        modifyVars: {
          // 直接覆盖变量
          'text-color': '#111',
          'border-color': '#eee',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        },
     
    },
  },
},
}