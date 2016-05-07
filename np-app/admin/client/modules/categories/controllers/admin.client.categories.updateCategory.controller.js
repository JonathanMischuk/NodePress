var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminUpdateCategoryController', AdminUpdateCategoryController);

function AdminUpdateCategoryController (
    $scope,
    $rootScope,
    AdminUserAuthenticationService,
    AdminUtilitiesServices,
    category
) {
    'use strict';

    AdminUserAuthenticationService();

    var vm = this;

    vm.category = category;
    vm.updateCategory = updateCategory;
    vm.errors = require('../errors/admin.client.categories.errors');

    function updateCategory() {
        if ($scope.updateCategoryForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.category.modifiedBy   = $rootScope.np.auth.user.username;
            vm.category.modifiedDate = date;

            vm.category.$update()
                .then(function () {

                    // display success dialog
                    Materialize.toast('Category updated successfully', 4000, 'success');

                    $scope.updateCategoryForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
