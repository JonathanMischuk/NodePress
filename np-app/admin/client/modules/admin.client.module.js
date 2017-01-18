'use strict';

var angular = require('angular');

module.exports = function () {
    var modules = [
        require('../vendors/angular-ui-sortable'),
        require('angular-resource'),
        require('angular-ui-router'),
        require('angular-animate'),
        require('angular-sanitize'),
        require('angular-material'),
        require('./app'),
        require('./utils'),
        require('./settings'),
        require('./dashboard'),
        require('./users'),
        require('./menus'),
        require('./categories'),
        require('./pages'),
        require('./sidebars'),
        require('./plugins'),
        require('./footer')
    ];

    angular.module('admin', modules);
};
