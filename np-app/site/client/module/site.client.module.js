'use strict';

var angular = require('angular');

module.exports = angular.module('site', [
    require('angular-resource'),
    require('angular-ui-router'),
    require('angular-animate'),
    require('angular-sanitize')
]);

require('./routes');
require('./services');
require('./controllers');
