'use strict';

var angular = require('angular');

module.exports = angular.module('utils')
    .directive('alertPanel', alertPanel);

function alertPanel ($timeout) {
    return {
        transclude: true,
        template:
        '<ng-transclude></ng-transclude>' +
        '<div class="close">' +
        '<i class="glyphicon glyphicon-remove"></i>' +
        '</div>',
        link: link
    };

    function link (scope, elem, attrs) {
        var timer;

        scope.$on('updatedStatus', getUpdatedStatus);
        elem.find('.close').on('click', setUpdatedStatusFalse);

        function getUpdatedStatus (event, value) {
            if (value === true) {
                elem.show();
                timer = $timeout(setUpdatedStatusFalse, 5000);
            } else {
                $timeout.cancel(timer);
                elem.hide();
            }
        }

        function setUpdatedStatusFalse () {
            scope.$emit('updatedStatus', false);
        }
    }
}
