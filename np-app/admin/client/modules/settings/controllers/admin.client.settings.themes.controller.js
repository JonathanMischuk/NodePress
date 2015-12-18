'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsThemesController', AdminSettingsThemesController);

function AdminSettingsThemesController (
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.themes = [];
    vm.updateAppSettings = updateAppSettings;

    angular.forEach($rootScope.themes, function (theme) {
        vm.themes.push({
            title: theme,
            preview: '/' + theme + '/preview.jpg'
        });
    });

    AdminAppSettingsService.getAppSettings()
        .then(function (appSettings) {
            vm.settings = appSettings.data[0];
        });

    function updateAppSettings(theme) {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.settings.modifiedBy = $rootScope.auth.username;
        vm.settings.modifiedDate = date;
        vm.settings.theme = theme;

        AdminAppSettingsService.updateAppSettings(vm.settings)
            .then(function () {
                // display success dialog
                Materialize.toast('NodePress theme updated successfully', 4000, 'success');
            })
            .catch(function (error) {
                //vm.errorTitle = error;
            });
    }
}
