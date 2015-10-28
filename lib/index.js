/**
 * Created by channing on 15/10/28.
 */

var phantomjs = require('phantomjs');
//var echarts = require('echarts');
var parseConfig = require('./parse_config');
module.exports = function(config){
  var CONFIG = parseConfig(config);
  phantomjs.create
};