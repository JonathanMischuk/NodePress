'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminGetUsersController', AdminGetUsersController);

function AdminGetUsersController(AdminUsersAPIService) {
    var vm = this;

    vm.users      = [];
    vm.getUsers   = getUsers;
    vm.removeUser = removeUser;
    vm.setSelectedUser = setSelectedUser;
    vm.selectedUser = null;

    function getUsers() {
        vm.users = AdminUsersAPIService.query();
    }

    function removeUser() {
        var index = vm.users.indexOf(vm.selectedUser);
        vm.selectedUser.$remove();

        vm.users.splice(index, 1);
        vm.selectedUser = null;

        // display success dialog
        Materialize.toast('User removed successfully', 4000, 'success');
    }

    function setSelectedUser (user) {
        vm.selectedUser = user;
    }
}