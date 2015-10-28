/**
 * Created by channing on 15/10/28.
 */

var path = require('path');

module.exports = function (config) {

  try {
    var echarts_option = requrie(config.option);
  }
  catch (e) {
    throw new Error('option.json not found!');
  }
  if (isNaN(Number(config.width)) || isNaN(Number(config.height))) {
    throw new Error('width and height must be a number!');
  }

  return {
    option: echarts_option,
    width: Number(config.width),
    height: Number(config.height),
    output: config.output == 'undefined'? path.resolve(__dirname,'../tmp'):config.output
  };
};