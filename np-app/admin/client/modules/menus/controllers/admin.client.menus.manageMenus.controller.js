'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminManageMenuLocationsController', AdminManageMenuLocationsController);

function AdminManageMenuLocationsController(
    $scope,
    $rootScope,
    AdminMenusAPIService,
    AdminManageMenuLocationsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.menus = AdminMenusAPIService.query();
    vm.updateMenuLocations = updateMenuLocations;

    AdminManageMenuLocationsService.getMenuLocations()
        .then(function (menuLocations) {
            vm.menuLocations = menuLocations.data[0];
        });

    function updateMenuLocations() {

        // create human readable date for modified date
        var date = AdminUtilitiesServices.createHumanReadableDate();

        vm.menuLocations.modifiedBy   = $rootScope.auth.username;
        vm.menuLocations.modifiedDate = date;

        if (vm.menuLocations.primary === null) vm.menuLocations.primary = 'No Menu';
        if (vm.menuLocations.secondary === null) vm.menuLocations.secondary = 'No Menu';

        AdminManageMenuLocationsService.updateMenuLocations(vm.menuLocations)
            .then(function () {

                // display success alert panel
                $scope.$emit('updatedStatus', true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
