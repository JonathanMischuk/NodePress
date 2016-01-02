'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarItem', sidebarItem);

function sidebarItem ($compile) {
    return {
        link: link
    };

    function link (scope, elem, attrs) {
        var html = '<span ng-model="' + attrs.model + '" class="' + attrs.slug + '">';
        elem.append($compile(html)(scope));
    }
}
