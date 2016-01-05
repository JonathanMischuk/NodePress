(function () {
    'use strict';

    angular.module('site')
        .directive('sidebarItemMenu', sidebarItemMenu);

    function sidebarItemMenu () {
        return {
            replace: true,
            restrict: 'C',
            template: '<div><h5>{{ sidebar.sidebar.model.title }}</h5>' +
                '<nav class="ng-cloak green">' +
                    '<ul>' +
                        '<li ng-repeat="sidebarItem in sidebar.sidebar.model.body">' +
                            '<a ng-href="/{{ sidebarItem.slug }}">' +
                                '{{ sidebarItem.title }}' +
                            '</a>' +
                        '</li>' +
                    '</ul>' +
                '</nav></div>',
            controller: AdminSidebarItemMenuDirectiveController,
            controllerAs: 'sidebar'
        };

        function AdminSidebarItemMenuDirectiveController ($scope) {
            var vm = this;
            vm.sidebar = $scope.sidebarItem;
                /*sidebarItem;

            vm.menus = $rootScope.menus;

            sidebarItem = angular.forEach($scope.sidebarItem, function (sidebarItem, i) {
                console.log(sidebarItem.model);
                if (sidebarItem.type === 'menu') {
                    if (sidebarItem.model.body !== '') {
                        console.log(_.filter(vm.menus, _.matches({'title': sidebarItem.model.body}))[0].items);
                        return _.filter(vm.menus, _.matches({'title': sidebarItem.model.body}))[0].items;
                    }
                }
            });*/
        }
    }
})();
