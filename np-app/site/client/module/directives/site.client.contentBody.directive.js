'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .directive('fadeIn', fadeIn);

function fadeIn ($timeout) {
    return {
        link: link
    };

    function link (scope, elem, attrs) {
    }
}
