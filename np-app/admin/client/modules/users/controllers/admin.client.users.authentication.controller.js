'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminUserAuthenticationController', AdminUserAuthenticationController);

function AdminUserAuthenticationController(
    $scope,
    $rootScope,
    AdminUserAuthenticationService) {

    var vm = this;

    AdminUserAuthenticationService();

    $scope.$on('session', function (event, user) {
        $rootScope.auth = user;
    });
}
