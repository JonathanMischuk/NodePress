'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminUpdateCategoryController', AdminUpdateCategoryController);

function AdminUpdateCategoryController (
    $scope,
    $rootScope,
    $stateParams,
    AdminCategoriesAPIService,
    AdminUserAuthenticationService,
    AdminUtilitiesServices) {

    AdminUserAuthenticationService();

    var vm = this;

    vm.category       = {};
    vm.updateCategory = updateCategory;
    vm.getCategory    = getCategory;
    vm.errors = require('../errors/admin.client.categories.errors');

    function getCategory() {
        vm.category = AdminCategoriesAPIService.get({
            categoryId: $stateParams.categoryId
        });
    }

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
