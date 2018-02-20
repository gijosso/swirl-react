'use strict';

module.exports = function (app) {
    const Authenticate = require('../controllers/Authenticate');

    app.route('/authenticate')
        .post(Authenticate.authenticate);
};
