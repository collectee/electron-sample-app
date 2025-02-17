
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // 使用 contenthash 便于生产环境缓存控制
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // 可添加更多生产环境相关优化配置
});