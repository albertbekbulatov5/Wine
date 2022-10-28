const fs = require('fs'),
    path = './gulp-config/tasks',
    arrayPathFiles = fs.readdirSync(path).map(ceil => ceil = path + '/' + ceil);
console.log(arrayPathFiles);
module.exports = arrayPathFiles;