var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsSkinsController', AdminSettingsSkinsController);

function AdminSettingsSkinsController (
    $rootScope,
    AdminAppSettingsService,
    AdminUtilitiesServices,
    settings
) {
    'use strict';

    var vm = this;

    vm.skins = [];
    vm.settings = settings.data[0];
    vm.updateAppSettings = updateAppSettings;

    angular.forEach($rootScope.np.settings.skins, function (skin) {
        vm.skins.push({
            title: skin,
            preview: '/' + skin + '/preview-skin.jpg'
        });
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
