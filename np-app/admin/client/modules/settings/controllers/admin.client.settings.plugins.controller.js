var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsPluginsController', AdminSettingsPluginsController);

function AdminSettingsPluginsController (
    $rootScope,
    settings,
    pluginsConfig,
    AdminUtilitiesServices,
    AdminAppSettingsService
) {
    'use strict';

    var vm = this;

    vm.settings = settings.data[0];
    vm.pluginsConfig = pluginsConfig;
    vm.setPluginStatus = setPluginStatus;
    vm.updateAppSettings = updateAppSettings;

    angular.forEach(vm.pluginsConfig, function (setting) {
        if (vm.settings.plugins.indexOf(setting.slug) !== -1) {
            setting.active = true;
        }
    });

    function setPluginStatus (index) {
        vm.pluginsConfig[index].active = !vm.pluginsConfig[index].active;
    }

    function updateAppSettings (index) {
        setPluginStatus(index);

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate(),
            plugins = [];

        angular.forEach(vm.pluginsConfig, function (plugin) {
            if (plugin.active) {
                plugins.push(plugin.slug);
            } else {
                plugins.splice(index, 1);
            }
        });

        vm.settings.modifiedBy = $rootScope.np.auth.user.username;
        vm.settings.modifiedDate = date;
        vm.settings.plugins = plugins;

        AdminAppSettingsService.updateAppSettings(vm.settings)
            .then(function () {

                // display success dialog
                Materialize.toast('NodePress plugins updated successfully.', 4000, 'success');
            })
            .catch(function (error) {
                //vm.errorTitle = error;
            });
    }
}
