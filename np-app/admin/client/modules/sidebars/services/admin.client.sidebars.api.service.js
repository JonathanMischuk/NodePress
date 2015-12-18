'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .factory('AdminSidebarsAPIService', AdminSidebarsAPIService);

function AdminSidebarsAPIService($resource) {
    return $resource('/api/sidebars/:sidebarId', {
        sidebarId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}
