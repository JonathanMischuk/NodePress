'use strict';

var angular = require('angular');

module.exports = angular.module('pages')
    .controller('AdminNewPageController', AdminNewPageController);

function AdminNewPageController(
    $scope,
    $rootScope,
    $location,
    AdminPagesAPIService,
    AdminCategoriesAPIService,
    AdminUserAuthenticationService,
    AdminSidebarsAPIService,
    AdminUtilitiesServices) {

    AdminUserAuthenticationService();

    var vm = this;

    vm.page = {};
    vm.newPage = newPage;
    vm.categories = AdminCategoriesAPIService.query();
    vm.sidebars = AdminSidebarsAPIService.query();
    vm.errors = require('../errors/admin.client.pages.errors');

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');

    function newPage() {
        if ($scope.newPageForm.$valid) {

            // Make sure value of page body textarea is identical to CKEditor value
            vm.page.body = angular.element('.cke_wysiwyg_div').html() ||
                angular.element('.cke_source').val();

            console.log(vm.page.sidebarLeft, vm.page.sidebarRight);

            var Page = new AdminPagesAPIService({
                createdBy: $rootScope.np.auth.user.username,
                slug: vm.page.slug,
                title: vm.page.title,
                category: vm.page.category,
                body: vm.page.body,
                sidebarLeft: vm.page.sidebarLeft,
                sidebarRight: vm.page.sidebarRight
            });

            Page.$save()
                .then(function (page) {
                    $location.path('/pages/' + page._id);
                })
                .catch(function (error) {
                    vm.errorTitle = error.data.errors.title || '';
                });
        }
    }
}
