'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsController', AdminSettingsController);

function AdminSettingsController(
    $scope,
    $rootScope,
    AdminPagesAPIService,
    AdminAppSettingsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.pages = AdminPagesAPIService.query();
    vm.themes = [];
    vm.updateAppSettings = updateAppSettings;
    //vm.frontEndURL = AdminUtilitiesServices.createHostURL();

    angular.forEach($rootScope.themes, function (theme) {
        vm.themes.push({
            theme: theme
        });
    });

    AdminAppSettingsService.getAppSettings()
        .then(function (appSettings) {
            vm.settings = appSettings.data[0];
        });

    function updateAppSettings() {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.settings.modifiedBy = $rootScope.auth.username;
        vm.settings.modifiedDate = date;

        if (vm.settings.siteHomePage === null) vm.settings.siteHomePage = 'Home';

        AdminAppSettingsService.updateAppSettings(vm.settings)
            .then(function () {

                // display success alert panel
                $scope.$emit('updatedStatus', true);
            })
            .catch(function (error) {
                //vm.errorTitle = error;
            });
    }
}
