var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminNewUserController', AdminNewUserController);

function AdminNewUserController (
    $scope,
    $rootScope,
    $location,
    AdminUsersAPIService,
    AdminUserRolesService
) {
    'use strict';

    var vm = this;

    vm.roles = AdminUserRolesService;
    vm.newUser = newUser;
    vm.errors = require('../errors/admin.client.users.errors');

    function newUser() {
        if ($scope.userForm.$valid && vm.user.password === vm.user.cpassword) {
            var User = new AdminUsersAPIService({
                firstName: vm.user.firstName,
                lastName: vm.user.lastName,
                username: vm.user.username,
                email: vm.user.email,
                role: vm.user.role || 'Administration',
                password: vm.user.password
            });

            User.$save()
                .then(function (user) {
                    $scope.userForm.$setPristine();

                    if (!$rootScope.np.auth.user) {
                        $location.path('/login');
                    } else if ($rootScope.np.auth.user) {
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
