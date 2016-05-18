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

    return adminPluginService;
}
