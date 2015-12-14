'use strict';

var mongoose = require('mongoose'),
    config = require('../../../../np-config'),
    db = mongoose.connect(config.db.uri, function (err) {
        if (err) return new Error(err);
        console.log('mongodb connected to: ' + config.db.uri);
    });

module.exports = db;
