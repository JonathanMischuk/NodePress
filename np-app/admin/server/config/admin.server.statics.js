'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function (app) {
    app.use('', express.static(app.locals.np.baseUrl + '/np-site/themes'));
    app.use('', express.static(app.locals.np.baseUrl + '/np-app/admin/client/skins'));

    app.use('/public', express.static(app.locals.np.baseUrl + '/np-app/admin/client'));
    app.use('/public', express.static(app.locals.np.baseUrl + '/bower_components'));
    app.use('/public', express.static(app.locals.np.baseUrl + '/np-site/plugins'));

    fs.readdirSync(app.locals.np.baseUrl + '/np-app/admin/client/modules').forEach(function (dir) {
        app.use('/np-admin', express.static(app.locals.np.baseUrl + '/np-app/admin/client/modules/' + dir + '/views'));
    });
};
