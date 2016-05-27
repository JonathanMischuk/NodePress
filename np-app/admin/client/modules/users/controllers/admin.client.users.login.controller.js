'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminUserLoginController', AdminUserLoginController);

function AdminUserLoginController(
    $scope,
    $rootScope,
    $location,
    $state,
    AdminUsersLoginService) {

    if ($rootScope.np.auth.user) $location.path('/');

    var vm = this;

    vm.user  = {};
    vm.login = login;

    function login() {
        if ($scope.loginForm.$valid) {
            AdminUsersLoginService.login(vm.user)
                .then(function (response) {
                    $scope.$emit('session', response.data);
                    $state.go('np.dashboard');
                })
                .catch(function (error) {
                    vm.error = error.data.message || '';
                    vm.errorField = error.data.field;
                });
        }
    }
}
