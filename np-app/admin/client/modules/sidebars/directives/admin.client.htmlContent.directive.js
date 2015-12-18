'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarHtmlContent', sidebarHtmlContent);

function sidebarHtmlContent () {
    return {
        restrict: 'C',
        transclude: true,
        templateUrl: 'admin.client.htmlContent.directive.view',
        link: link
        //compile: compile
    };

    function link (scope, elem, attrs) {
        console.log('HTML Content Directive');
    }

    function compile () {
        return {
            pre: function (scope, elem, attrs) {
                console.log('HTML Content Directive');
                $compile(elem)(scope);
            }
        }
    }
}
