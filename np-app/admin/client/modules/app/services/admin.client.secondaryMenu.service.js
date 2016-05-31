var angular = require('angular');

module.exports = angular.module('app')
    .factory('AdminSecondaryMenuService', AdminSecondaryMenuService);

function AdminSecondaryMenuService ($http) {
    'use strict';
    
    var adminSecondaryMenuService = {};

    adminSecondaryMenuService.getActiveComponents = function () {
        return $http.get('/api/components').then(function (response) {
            return response.data;
        });
    };

    return adminSecondaryMenuService;
}
