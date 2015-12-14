'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .controller('AdminGetUsersController', AdminGetUsersController);

function AdminGetUsersController(AdminUsersAPIService) {
    var vm = this;

    vm.users      = [];
    vm.getUsers   = getUsers;
    vm.removeUser = removeUser;

    function getUsers() {
        vm.users = AdminUsersAPIService.query();
    }

    // TODO: find it's own home
    function removeUser(user) {
        var index = vm.users.indexOf(user);
        user.$remove();

        vm.users.splice(index, 1);
    }
}