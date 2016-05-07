var angular = require('angular');

module.exports = angular.module('utils')
    .directive('popupTrigger', popupTrigger);

function popupTrigger ($timeout) {
    'use strict';

    return {
        restrict: 'EA',
        link: link
    };

    function link (scope, elem, attrs) {
        angular.element(document).ready(function () {
            $timeout(function () {
                elem.leanModal();
            }, 1000);
        });
    }
}
