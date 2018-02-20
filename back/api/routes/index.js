const User = require('./User');
const Authenticate = require('./Authenticate');

module.exports = function (app) {
    User(app);
    Authenticate(app);
};