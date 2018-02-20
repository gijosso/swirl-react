'use strict';

module.exports = function (app) {
    const user = require('../controllers/User');

    //all USER api routes
    app.route('/user')
        .get(user.getAllUser)
        .post(user.createUser);

    app.route('/user/:userId')
        .get(user.getUser)
        .delete(user.deleteUser);
};