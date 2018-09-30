// module.exports = {
//   parser: 'sugarss',
//   plugins: {
//     'postcss-import': {},
//     'postcss-preset-env': {},
//     'cssnano': {}
//   }
// }

module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'ie >= 9',
        'Firefox >= 20',
        'Chrome > 40',
        'Safari >= 8'
      ],
      remove: false
    },
  }
}
