let path = require('path');

function getAbsolutePath(){
    return path.resolve('package.json').replace('package.json', '');
}

exports.getAbsolutePath = getAbsolutePath;