(function () {
    'use strict';

    angular.module('sidebars')
        .directive('sidebarItemMenu', sidebarItemMenu);

    function sidebarItemMenu () {
        return {
            replace: true,
            restrict: 'C',
            template: '<select ng-options="menu.title as menu.title for menu in menus.menus">' +
                '<option value="" disabled active>Select a Menu</option>' +
                '</select>',
            controller: AdminSidebarItemMenuDirectiveController,
            controllerAs: 'menus'
        };

        function AdminSidebarItemMenuDirectiveController ($scope, $timeout, AdminMenusAPIService) {
            var vm = this;

            // get list of published menus
            vm.menus = AdminMenusAPIService.query();

            // set Materialize select box default value
            $scope.sidebar.sidebar.items.forEach(function (sidebarItem) {
                if (sidebarItem.type === 'menu') {
                    $timeout(function () {
                        angular.element('.sidebar-item-id-' + sidebarItem.id + ' .select-dropdown')
                            .val($scope.sidebar.sidebar.items[$scope.sidebar.sidebar.items.indexOf(sidebarItem)].model.body);
                    }, 200);
                }
            });
        }
    }
})();
