
module.exports = {
  "plugins": {
      "autoprefixer": {
          browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      "postcss-pxtorem": {
          viewportWidth: 1920, // (Number) 视口的宽度。
          viewportHeight: 1024, // (Number) 视口的高度。
          unitPrecision: 3, // (Number) 允许 REM 单位增长到的十进制数。
          viewportUnit: 'rem', // (String) 预期单位.
          selectorBlackList: [], // (Array) 要忽略并保留为 px 的选择器。
          minPixelValue: 1, // (Number) 设置要替换的最小像素值。
          mediaQuery: false, // (Boolean) 允许在媒体查询中转换 px。
          propList: ['*']
      }
  }
}