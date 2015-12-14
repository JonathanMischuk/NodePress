'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminUpdateCategoryController', AdminUpdateCategoryController);

function AdminUpdateCategoryController(
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
    vm.errorMessages = require('../errors/admin.client.categories.errors');

    function getCategory() {
        vm.category = AdminCategoriesAPIService.get({
            categoryId: $stateParams.categoryId
        });
    }

    function updateCategory() {
        if ($scope.updateCategoryForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.category.modifiedBy   = $rootScope.auth.username;
            vm.category.modifiedDate = date;

            vm.category.$update()
                .then(function () {

                    // display success alert panel
                    $scope.$emit('updatedStatus', true);

                    $scope.updateCategoryForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
