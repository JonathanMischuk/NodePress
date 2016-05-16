var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsPluginsController', AdminSettingsPluginsController);

function AdminSettingsPluginsController (
    settings,
    pluginsConfig
) {
    'use strict';

    var vm = this;

    console.log(pluginsConfig, settings);

    vm.settings = settings.data[0];
    vm.pluginsConfig = pluginsConfig;
    vm.updateAppSettings = updateAppSettings;

    function updateAppSettings (theme) {}
}
