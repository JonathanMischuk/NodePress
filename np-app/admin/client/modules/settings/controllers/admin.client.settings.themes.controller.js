var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsThemesController', AdminSettingsThemesController);

function AdminSettingsThemesController (
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices,
    settings
) {
    'use strict';

    var vm = this;

    vm.themes = [];
    vm.settings = settings.data[0];
    vm.updateAppSettings = updateAppSettings;

    angular.forEach($rootScope.np.settings.themes, function (theme) {
        vm.themes.push({
            title: theme,
            preview: '/' + theme + '/preview.jpg'
        });
    });

    function updateAppSettings(theme) {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.settings.modifiedBy = $rootScope.np.auth.user.username;
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
