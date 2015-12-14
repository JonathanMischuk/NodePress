'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .service('AdminAppSettingsService', AdminAppSettingsService);

function AdminAppSettingsService($http) {

    var self = this;

    self.getAppSettings = getAppSettings;
    self.updateAppSettings = updateAppSettings;

    function getAppSettings() {
        return $http.get('/api/settings');
    }

    function updateAppSettings(settings) {
        return $http.put('/api/settings', settings);
    }
}
