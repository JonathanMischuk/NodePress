var angular = require('angular');

module.exports = angular.module('pages')
    .controller('AdminUpdatePageController', AdminUpdatePageController);

function AdminUpdatePageController (
    $scope,
    $rootScope,
    $timeout,
    AdminUserAuthenticationService,
    AdminUtilitiesServices,
    categories,
    sidebars,
    page
) {
    'use strict';
    
    AdminUserAuthenticationService();

    var vm = this;

    vm.page = page;
    vm.updatePage = updatePage;
    vm.errors = require('../errors/admin.client.pages.errors');
    vm.frontEndURL = '';
    vm.categories = categories;
    vm.sidebars = sidebars;

    // set Materialize select box default value
    $timeout(function () {
        angular.element('.site-page-category .select-dropdown').val(page.category);
        angular.element('.site-page-sidebar-left .select-dropdown').val(page.sidebarLeft);
        angular.element('.site-page-sidebar-right .select-dropdown').val(page.sidebarRight);
    });

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');

    // replace page body textarea with CKEditor
    CKEDITOR.replace('html-editor', { extraPlugins: 'divarea' });

    function updatePage() {
        if ($scope.updatePageForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.page.modifiedBy = $rootScope.np.auth.user.username;
            vm.page.modifiedDate = date;

            // Make sure value of page body textarea is identical to CKEditor value
            vm.page.body = angular.element('.cke_wysiwyg_div').html() ||
                angular.element('.cke_source').val();

            vm.page.$update()
                .then(function () {

                    // display success dialog
                    Materialize.toast('Page updated successfully', 4000, 'success');

                    $scope.updatePageForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
