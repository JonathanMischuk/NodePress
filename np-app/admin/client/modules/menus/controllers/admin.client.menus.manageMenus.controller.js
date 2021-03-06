var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminManageMenuLocationsController', AdminManageMenuLocationsController);

function AdminManageMenuLocationsController (
    $rootScope,
    $timeout,
    AdminManageMenuLocationsService,
    AdminUtilitiesServices,
    menus,
    menuLocations
) {
    'use strict';

    var vm = this;

    vm.menus = menus;
    vm.updateMenuLocations = updateMenuLocations;
    vm.menuLocations = menuLocations.data[0];

    $timeout(function () {
        angular.element('.site-primary-menu .select-dropdown').val(vm.menuLocations.primary);
        angular.element('.site-secondary-menu .select-dropdown').val(vm.menuLocations.secondary);
    });

    function updateMenuLocations() {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.menuLocations.modifiedBy = $rootScope.np.auth.user.username;
        vm.menuLocations.modifiedDate = date;

        if (vm.menuLocations.primary === null) vm.menuLocations.primary = 'No Menu';
        if (vm.menuLocations.secondary === null) vm.menuLocations.secondary = 'No Menu';

        AdminManageMenuLocationsService.updateMenuLocations(vm.menuLocations)
            .then(function () {

                // display success dialog
                Materialize.toast('Menu locations updated successfully', 4000, 'success');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function convertSlugToString (str) {
        return str.replace(/-/g,' ').replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}
