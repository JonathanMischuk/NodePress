'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .directive('confirmPassword', confirmPassword);

function confirmPassword () {
    return {
        require: 'ngModel',
        link: link
    };

    function link (scope, elem, attrs, ctrl) {
        var cpassword = attrs.ngModel,
            password = attrs.confirmPassword;

        scope.$watchGroup([cpassword, password], setValidity);

        function setValidity (value) {
            ctrl.$setValidity('passwordsMatch', value[0] === value[1]);
        }
    }
}
