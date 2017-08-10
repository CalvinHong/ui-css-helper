var clearRequire = require('clear-require');
var path = require('path');
var variableFile = path.join(__dirname,'variable.js');
module.exports = {
  plugins: [
    require('postcss-simple-vars')({
      variables: function () {
          clearRequire(variableFile);
          return require(variableFile);
      }
    }),
    require('postcss-px2rem')({remUnit: 75}),
    require('autoprefixer')({browsers: ['last 3 versions']}),
    require('postcss-hexrgba')()
  ]
}
