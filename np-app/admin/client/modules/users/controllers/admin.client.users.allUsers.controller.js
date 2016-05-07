var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminGetUsersController', AdminGetUsersController);

function AdminGetUsersController (
    users
) {
    'use strict';
    
    var vm = this;

    vm.users = users;
    vm.removeUser = removeUser;
    vm.setSelectedUser = setSelectedUser;
    vm.selectedUser = null;

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