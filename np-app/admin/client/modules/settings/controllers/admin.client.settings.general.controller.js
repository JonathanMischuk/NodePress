var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsGeneralController', AdminSettingsGeneralController);

function AdminSettingsGeneralController (
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices,
    pages,
    settings
) {
    'use strict';

    var vm = this;

    vm.pages = pages;
    vm.themes = [];
    vm.settings = settings.data[0];
    vm.updateAppSettings = updateAppSettings;

    angular.forEach($rootScope.np.settings.themes, function (theme) {
        vm.themes.push({
            theme: theme
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
}
