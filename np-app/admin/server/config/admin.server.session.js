'use strict';

var express = require('express'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    passport = require('passport'),

    config = require('../../../../np-config');

module.exports = function (app) {

    // configure express session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store: new MongoStore({
            url: config.db.uri,
            collection: config.sessionCollection
        }),
        cookie: config.sessionCookie,
        name: config.sessionName
    }));

    // passport session
    app.use(passport.initialize());
    app.use(passport.session());
    require('./admin.server.passport')();
};
