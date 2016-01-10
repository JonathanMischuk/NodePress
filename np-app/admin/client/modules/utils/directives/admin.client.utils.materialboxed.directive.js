'use strict';

var angular = require('angular');

module.exports = angular.module('utils')
    .directive('materialboxed', materialboxed);

function materialboxed ($timeout) {
    return {
        restrict: 'C',
        link: link
    };

    function link (scope, elem, attrs) {
        $timeout(create);

        function create() {
            elem.materialbox();
        }
    }
}
