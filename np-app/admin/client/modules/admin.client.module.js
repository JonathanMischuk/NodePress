'use strict';

var angular = require('angular');

module.exports = angular.module('admin', [
    require('../vendors/angular-ui-sortable'),
    require('angular-resource'),
    require('angular-ui-router'),
    require('angular-animate'),
    require('./utils'),
    require('./settings'),
    require('./dashboard'),
    require('./users'),
    require('./menus'),
    require('./categories'),
    require('./pages')
]);
