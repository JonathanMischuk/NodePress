'use strict';

var angular = require('angular');

module.exports = angular.module('utils')
    .directive('tooltippedee', tooltipped);

function tooltipped ($timeout) {
    return {
        restrict: 'C',
        link: link
    };

    function link (scope, elem, attrs) {
        $timeout(create);

        function create() {
            elem.tooltip();
        }

        //if using materialize v0.96.0 use this
        elem.one('$destroy', function () {
            elem.tooltip('remove');
        });
    }
}
