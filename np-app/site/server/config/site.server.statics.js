'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function (app) {

    // set static files directory
    app.use(express.static(__dirname + '/../../client'));

    // set root themes directory
    app.use(express.static(__dirname + '/../../../../np-site/themes/'));

    // set root plugins directory
    app.use(express.static(__dirname + '/../../../../np-site/plugins/'));
};
