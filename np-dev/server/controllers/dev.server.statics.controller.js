'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function (app) {
    app.use('/public', express.static(__dirname + '/../../'));
    app.use(express.static(__dirname + '/../../content/themes/'));
};
