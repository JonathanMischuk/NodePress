'use strict';

var angular = require('angular');

module.exports = angular.module('utils')
    .directive('select', select);

function select ($timeout) {
    return {
        restrict: 'E',
        link: link,
        require: 'ngModel'
    };

    function link (scope, elem, attrs, ngModel) {
        $timeout(create);

        if (ngModel) {
            ngModel.$render = create;
        }

        function create() {
            elem.material_select();
        }

        //if using materialize v0.96.0 use this
        elem.one('$destroy', function () {
            elem.material_select('destroy');
        });
    }
}
