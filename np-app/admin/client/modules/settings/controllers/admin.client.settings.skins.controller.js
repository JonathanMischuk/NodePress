'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsSkinsController', AdminSettingsSkinsController);

function AdminSettingsSkinsController (
    $scope,
    $location,
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.skins = [];
    vm.updateAppSettings = updateAppSettings;

    angular.forEach($rootScope.np.settings.skins, function (skin) {
        vm.skins.push({
            title: skin,
            preview: '/' + skin + '/preview-skin.jpg'
        });
    });

    AdminAppSettingsService.getAppSettings()
        .then(function (appSettings) {
            vm.settings = appSettings.data[0];
        });

    function updateAppSettings(skin) {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.settings.modifiedBy = $rootScope.np.auth.user.username;
        vm.settings.modifiedDate = date;
        vm.settings.skin = skin;

        AdminAppSettingsService.updateAppSettings(vm.settings)
            .then(function () {

                // display success dialog
                Materialize.toast('NodePress skin updated successfully.', 4000, 'success');

                $rootScope.$emit('adminHeader', vm.settings.skin);
            })
            .catch(function (error) {
                //vm.errorTitle = error;
            });
    }
}
