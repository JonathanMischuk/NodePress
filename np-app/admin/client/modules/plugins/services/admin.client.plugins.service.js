'use strict';

var angular = require('angular');

module.exports = angular.module('plugins')
    .factory('AdminPluginsService', AdminPluginsService);

function AdminPluginsService($http) {
    var adminPluginService = {};

    adminPluginService.getPluginConfig = function () {
        return $http.get('/api/plugins').then(function (response) {
            return response.data;
        });
    };

    adminPluginService.getActivePlugins = function () {
        return $http.get('/api/plugins/active').then(function (response) {
            console.log(response.data);
            return response.data;
        });
    };

    adminPluginService.getComponents = function () {
        return $http.get('/api/components').then(function (response) {
            return response.data;
        });
    };
    
    adminPluginService.getComponentsBySection = function (section) {
        return $http.get('/api/components/' + section).then(function (response) {
            return response.data;
        });
    };

    return adminPluginService;
}
