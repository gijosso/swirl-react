'use strict';

module.exports = function (app) {
    const KeepAlive = require('../controllers/KeepAlive');

    app.route('/keep-alive')
        .get(KeepAlive.keepAlive);
};
