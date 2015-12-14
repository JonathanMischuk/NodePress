var express = require('express'),
    session = require('express-session');

module.exports = function () {
    var app = express(),
        site = require('../../../site/server/config/site.server.app')();

    // middleware
    require('./admin.server.middleware')(app);

    // template engine
    require('./admin.server.engines')(app);

    // initialize database
    require('./admin.server.init')();

    // configure express and passport session
    require('./admin.server.session')(app);

    // static files
    require('./admin.server.statics')(app);

    // admin core api routes
    require('./admin.server.routes')(app);

    // site sub app
    app.use('/', site);

    return app;
};