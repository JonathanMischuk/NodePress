'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function (app) {
    app.use('/public', express.static(__dirname + '/../../client'));
    app.use('/public', express.static(__dirname + '/../../../../bower_components'));

    fs.readdirSync(__dirname + '/../../client/modules').forEach(function (dir) {
        app.use('/np-admin', express.static(__dirname + '/../../client/modules/' + dir + '/views'));
    });
};
