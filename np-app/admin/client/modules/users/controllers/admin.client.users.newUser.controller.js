'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminNewUserController', AdminNewUserController);

function AdminNewUserController(
    $scope,
    $rootScope,
    $location,
    AdminUsersAPIService) {

    var vm = this;

    vm.newUser = newUser;

    function newUser() {
        if ($scope.userForm.$valid && vm.user.password === vm.user.cpassword) {
            var User = new AdminUsersAPIService({
                firstName: vm.user.firstName,
                lastName: vm.user.lastName,
                username: vm.user.username,
                email: vm.user.email,
                role: vm.user.role,
                password: vm.user.password
            });

            User.$save()
                .then(function (user) {
                    $scope.userForm.$setPristine();

                    if (!$rootScope.auth) {
                        $location.path('/login');
                    } else if ($rootScope.auth) {
                        $location.path('/users/' + user.username);
                    }
                })
                .catch(function (error) {
                    vm.errorEmail = error.data.errors.email || '';
                    vm.errorUsername = error.data.errors.username || '';
                });
        }
    }

}