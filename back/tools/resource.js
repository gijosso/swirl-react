'use strict';
const file = require('./file');

const resource = function resource() {
    this.users = file.getContent('../user.json');
    this.tokens = file.getContent('../token.json');
    return this;
};

resource.instance = null;

resource.get = function () {
    if (this.instance === null) {
        this.instance = new resource();
    }
    return this.instance;
};

module.exports = resource.get();