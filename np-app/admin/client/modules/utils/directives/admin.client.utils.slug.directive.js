'use strict';

var angular = require('angular');

module.exports = angular.module('utils')
    .directive('createSlug', createSlug);

function createSlug () {
    return {
        require: 'ngModel',
        link: link
    };

    function link (scope, elem, attrs, ctrl) {
        scope.$watch(attrs.createSlug, formatTitleString);

        function formatTitleString (value) {
            var formattedTitleString;

            if (value) {
                formattedTitleString = value.toString()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-')
                    .toLowerCase();
            } else {
                formattedTitleString = '';
            }

            ctrl.$setViewValue(formattedTitleString);
            ctrl.$render();
        }
    }
}
