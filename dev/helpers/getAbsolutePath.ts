let path = require('path');

function getAbsolutePath(): String{
    return path.resolve('package.json').replace('package.json', '');
}

exports.getAbsolutePath = getAbsolutePath;