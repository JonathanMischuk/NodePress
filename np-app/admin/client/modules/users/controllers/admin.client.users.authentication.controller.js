'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminUserAuthenticationController', AdminUserAuthenticationController);

function AdminUserAuthenticationController (
    $scope,
    $rootScope,
    $http,
    AdminUserAuthenticationService
) {
    var vm = this;

    AdminUserAuthenticationService();

    $scope.$on('session', function (event, user) {
        $rootScope.np.auth.user = user;
    });
}
