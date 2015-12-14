'use strict';

var angular = require('angular');

module.exports = angular.module('pages')
    .controller('AdminUpdatePageController', AdminUpdatePageController);

function AdminUpdatePageController(
    $scope,
    $rootScope,
    $stateParams,
    AdminCategoriesAPIService,
    AdminPagesAPIService,
    AdminUserAuthenticationService,
    AdminUtilitiesServices) {

    AdminUserAuthenticationService();

    var vm = this;

    vm.page = {};
    vm.getPage = getPage();
    vm.updatePage = updatePage;
    vm.categories = AdminCategoriesAPIService.query();
    vm.errorMessages = require('../errors/admin.client.pages.errors');
    vm.frontEndURL = '';

    function getPage() {
        vm.page = AdminPagesAPIService.get({
            pageId: $stateParams.pageId
        }, function addCKEditor(page) {

            // create host url to view front end page
            vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');

            // replace page body textarea with CKEditor
            CKEDITOR.replace('html-editor', { extraPlugins: 'divarea' });
        });
    }

    function updatePage() {
        if ($scope.updatePageForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();
            console.log(date);

            vm.page.modifiedBy = $rootScope.auth.username;
            vm.page.modifiedDate = date;

            // Make sure value of page body textarea is identical to CKEditor value
            vm.page.body = angular.element('.cke_wysiwyg_div').html() ||
                angular.element('.cke_source').val();

            vm.page.$update()
                .then(function () {

                    // display success alert panel
                    $scope.$emit('updatedStatus', true);

                    $scope.updatePageForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
