'use strict';

var consolidate = require('consolidate');

module.exports = function (app) {

    // admin template engine
    app.engine('html', consolidate.swig);
    app.set('view engine', 'html');
    app.set('views', './np-app/admin/server/views');
};
