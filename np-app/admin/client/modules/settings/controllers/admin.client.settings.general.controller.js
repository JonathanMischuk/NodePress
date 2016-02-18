'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsGeneralController', AdminSettingsGeneralController);

function AdminSettingsGeneralController (
    $scope,
    $rootScope,
    $timeout,
    AdminPagesAPIService,
    AdminAppSettingsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.pages = AdminPagesAPIService.query();
    vm.themes = [];
    vm.updateAppSettings = updateAppSettings;
    //vm.frontEndURL = AdminUtilitiesServices.createHostURL();

    angular.forEach($rootScope.np.settings.themes, function (theme) {
        vm.themes.push({
            theme: theme
        });
    });

    AdminAppSettingsService.getAppSettings()
        .then(function (appSettings) {
            vm.settings = appSettings.data[0];
            vm.settings.siteHomePage = convertSlugToString(vm.settings.siteHomePage);

            // set Materialize select box default value
            $timeout(function () {
                angular.element('.site-home-page .select-dropdown').val(vm.settings.siteHomePage);
            });
        });

    function updateAppSettings() {
        if (vm.settings.siteHomePage === null) vm.settings.siteHomePage = 'Home';

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.settings.modifiedBy = $rootScope.np.auth.user.username;
        vm.settings.modifiedDate = date;

        AdminAppSettingsService.updateAppSettings(vm.settings)
            .then(function () {

                // display success dialog
                Materialize.toast('NodePress settings updated successfully', 4000, 'success');
            })
            .catch(function (error) {
                //vm.errorTitle = error;
            });
    }

    function convertSlugToString (str) {
        return str.replace(/-/g,' ').replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}
