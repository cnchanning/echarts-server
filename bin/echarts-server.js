/**
 * Created by channing on 15/10/28.
 */

var phantomjs = require('phantomjs');
var program = require('commander');



program
  .version('0.0.1')
  .usage('--option /path/to/option.json --with 1000 --height 1000 --type png --output output-path/example.png')
  .option('-i, --option <path>', 'option json path')
  .option('-w, --width <n>', 'output image width',500)
  .option('-h, --height <n>', 'output image height',500)
  .option('-o, --output <path>', 'output image path')
  .option('-n, --name <string>', 'output image name')
  .parse(process.argv);


require('../lib')({
  option:program.option,
  width:program.width,
  height:program.height,
  output:program.output,
  name:program.name
});

