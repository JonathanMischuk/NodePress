'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarHtmlContent', sidebarHtmlContent);

function sidebarHtmlContent ($compile) {
    /*return {
        restrict: 'C',
        scope: {

        },
        link: link
    };

    function link (scope, elem, attrs) {
        console.log('HTML Content Directive');

        scope.addSidebarItem = function () {

            angular.element('.sidebar-items-container-added').prepend(
                '<li class="sidebar-item-html-content">' +
                    '<div class="collapsible-header">' +
                        '<i class="material-icons">code</i>HTML Content' +
                    '</div>' +
                    '<div class="collapsible-body">' +
                        '<p>Lorem ipsum dolor sit amet.</p>' +
                    '</div>' +
                '</li>'
            );
        };
    }*/

    /*function compile () {
        return {
            pre: function (scope, elem, attrs) {
                console.log('HTML Content Directive');
                $compile(elem)(scope);
            }
        }
    }*/
}
