'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarItem', sidebarItem)
    .directive('sidebarItemHtmlContent', sidebarItemHtmlContent);

function sidebarItem ($compile) {
    return {
        scope: {
            obj: '@',
            model: '='
        },
        link: link

    };

    function link (scope, elem, attrs) {
        var html = '<span ng-model="model" class="' + attrs.slug + '">';
        elem.append($compile(html)(scope));
    }
}

function sidebarItemHtmlContent () {
    return {
        replace: true,
        restrict: 'C',
        scope: {
            model: '='
        },
        template: '<textarea class="materialize-textarea"></textarea>'
    };
}
