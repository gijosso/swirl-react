const User = require('./User');
const Authenticate = require('./Authenticate');
const Refresh = require('./Refresh');

module.exports = function (app) {
    Authenticate(app);
    Refresh(app);
    User(app);
};