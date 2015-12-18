'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUserRolesService', AdminUserRolesService);

function AdminUserRolesService () {

    // TODO: find a better way to do this
    return [
        {
            role: 'Administration'
        },
        {
            role: 'Editor'
        }
    ];
}
