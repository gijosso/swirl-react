const User = require('./User');
const Authenticate = require('./Authenticate');
const KeepAlive = require('./KeepAlive');

module.exports = function (app) {
    Authenticate(app);
    KeepAlive(app);
    User(app);
};