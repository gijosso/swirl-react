'use strict';

module.exports = function (app) {
    const Refresh = require('../controllers/Resfresh');

    app.route('/refresh')
        .get(Refresh.refresh);
};
