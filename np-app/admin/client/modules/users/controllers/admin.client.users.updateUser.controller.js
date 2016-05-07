var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminUpdateUserController', AdminUpdateUserController);

function AdminUpdateUserController (
    $scope,
    $timeout,
    AdminUserUpdatePasswordService,
    AdminUserRolesService,
    AdminUtilitiesServices,
    user
) {
    'use strict';

    var vm = this;

    vm.user = user;
    vm.roles = AdminUserRolesService;
    vm.updateUser = updateUser;
    vm.updateUserPassword = updateUserPassword;
    vm.errors = require('../errors/admin.client.users.errors');

    // set Materialize select box default value
    $timeout(function () {
        angular.element('.site-user-role .select-dropdown').val(user.role);
    });

    function updateUser () {
        if ($scope.userForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            $scope.userForm.$setPristine();

            vm.user.modifiedDate = date;
            vm.user.$update()
                .then(function () {

                    // display success dialog
                    Materialize.toast('User updated successfully', 4000, 'success');

                    // reset properties and form
                    vm.user.password = '';
                    vm.user.cpassword = '';
                    $scope.userForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorEmail = error;
                });
        }
    }

    function updateUserPassword () {
        if ($scope.updateUserPasswordForm.$valid && vm.user.password === vm.user.cpassword) {
            AdminUserUpdatePasswordService.updateUserPassword(vm.user)
                .then(function () {

                    angular.element('#update-password').closeModal();

                    // display success dialog
                    Materialize.toast('User password updated successfully', 4000, 'success');

                    // reset properties and form
                    vm.user.password = '';
                    vm.user.cpassword = '';
                    $scope.updateUserPasswordForm.$setPristine();
                });
        }
    }
}
