var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUserRolesService', AdminUserRolesService);

function AdminUserRolesService () {
    'use strict';
    
    return [
        { role: 'Administration' },
        { role: 'Editor' }
    ];
}
