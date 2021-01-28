module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  },
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './'
}