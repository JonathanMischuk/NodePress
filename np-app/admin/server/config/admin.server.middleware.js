'use strict';

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    helmet = require('helmet'),

    config = require('../../../../np-config');

module.exports = function (app) {

    // middleware
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(cookieParser(config.sessionSecret));
};
