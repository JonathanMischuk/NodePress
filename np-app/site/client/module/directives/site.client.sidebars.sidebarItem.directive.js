'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .directive('sidebarItem', sidebarItem);

function sidebarItem ($compile) {
    return {
        link: link
    };

    function link (scope, elem, attrs) {
        var html = '<span class="' + attrs.slug + '">';
        elem.append($compile(html)(scope));
    }
}
