var express = require('express'),
    consolidate = require('consolidate'),
    api = require('../api');

module.exports = function () {
    var app = express();

    // template engine
    app.engine('html', consolidate.swig);
    app.set('view engine', 'html');
    app.set('views', './np-site/themes/');

    require('./site.server.statics')(app);

    // site pages api routes
    api.pagesAPI.routes.endPoints(app);

    // site core api routes
    api.coreAPI.routes.endPoints(app);

    return app;
};