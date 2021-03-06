'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function (app) {

    // set static files directory
    app.use(express.static(__dirname + '/../../client'));

    // set root plugins directory
    app.use(express.static(__dirname + '/../../../../np-site/plugins'));
};
