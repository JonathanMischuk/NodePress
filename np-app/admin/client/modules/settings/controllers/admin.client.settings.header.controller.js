'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsHeaderController', AdminSettingsHeaderController);

function AdminSettingsHeaderController (
    $scope,
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.angularInitialized = false;

    AdminAppSettingsService.getAppSettings()
        .then(function (appSettings) {
            vm.settings = appSettings.data[0];
            vm.angularInitialized = true;
        });

    $rootScope.$on('adminHeader', function (event, settings) {
        vm.settings.skin = settings;
    });

}