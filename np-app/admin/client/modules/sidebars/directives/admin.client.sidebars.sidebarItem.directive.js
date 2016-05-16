'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarItem', sidebarItem);

function sidebarItem ($compile) {
    return {
        link: link,
        scope: {
            item: '=',
            data: '='
        }
    };

    function link (scope, elem) {
        var template = '<' + scope.item.directiveSlug + ' class="' + scope.item.directiveSlug + '">' +
            '</' + scope.item.directiveSlug + '>';
        
        elem.append($compile(template)(scope));
    }
}
