const path = require('path')
const vueSrc = './src'

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/config/_config.helpers.scss";
        @import "@/assets/scss/config/_config.colors.scss";
        @import "@/assets/scss/config/_config.fonts.scss";
        @import "@/assets/scss/config/_config.layout.scss";
        @import "@/assets/scss/config/_config.responsive.scss";
        @import "@/assets/scss/utils/_utils.animations-transitions.scss";
      `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
}
