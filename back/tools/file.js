//Json source file handling

'use strict';

const fs = require('fs');

function readJsonFileSync(filepath, encoding) {
    if (typeof (encoding) === 'undefined') {
        encoding = 'utf8';
    }
    const file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

module.exports = {
    getContent: function (file) {
        const filepath = __dirname + '/' + file;
        return readJsonFileSync(filepath);
    }
};