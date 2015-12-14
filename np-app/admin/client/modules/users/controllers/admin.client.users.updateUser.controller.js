'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminUpdateUserController', AdminUpdateUserController);

function AdminUpdateUserController(
    $scope,
    $stateParams,
    AdminUsersAPIService,
    AdminUserUpdatePasswordService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.user = {};
    vm.getUser = getUser;
    vm.updateUser = updateUser;
    vm.updateUserPassword = updateUserPassword;
    vm.errorMessages = require('../errors/admin.client.users.errors');

    function getUser() {
        vm.user = AdminUsersAPIService.get({
            user: $stateParams.user
        });
    }

    function updateUser() {
        if ($scope.userForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            $scope.userForm.$setPristine();

            vm.user.modifiedDate = date;
            vm.user.$update()
                .then(function () {

                    // display success alert panel
                    $scope.$emit('updatedStatus', true);

                    vm.user.password = '';
                    vm.user.cpassword = '';
                    $scope.userForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorEmail = error;
                });
        }
    }

    function updateUserPassword() {
        vm.success = false;

        if ($scope.updateUserPasswordForm.$valid && vm.user.password === vm.user.cpassword) {
            AdminUserUpdatePasswordService.updateUserPassword(vm.user)
                .then(function () {
                    vm.success = true;
                    vm.user.password = '';
                    vm.user.cpassword = '';
                    $scope.updateUserPasswordForm.$setPristine();
                });
        }
    }
}
