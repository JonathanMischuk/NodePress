'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .factory('AdminMenusAPIService', AdminMenusAPIService);

function AdminMenusAPIService($resource) {
    return $resource('/api/menus/:menuId', {
        menuId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}
