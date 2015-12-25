'use strict';

var angular = require('angular');


module.exports = angular.module('menus')
    .controller('AdminNewSidebarController', AdminNewSidebarController);

function AdminNewSidebarController (
    $scope,
    $location,
    $rootScope,
    AdminSidebarsAPIService,
    AdminSidebarOptionsService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.avaliableSidebarItems = [
        {
            title: 'HTML Content',
            slug: 'html-content',
            type: 'HTMLContent',
            description: 'Add HTML content to your sidebar',
            directive: 'sidebarItemHtmlContent',
            directiveSlug: 'sidebar-item-html-content',
            model: {
                title: '',
                body: ''
            },
            icon: 'code'
        },
        {
            title: 'Menu',
            slug: 'menu',
            type: 'menu',
            description: 'Add a menu to your sidebar',
            directive: 'sidebarItemMenu',
            directiveSlug: 'sidebar-item-menu',
            model: {
                title: '',
                body: ''
            },
            icon: 'toc'
        }
    ];

    vm.sidebar = [];
    vm.sidebarItems = [];
    vm.checkSidebarModel = checkSidebarModel;
    vm.checkSidebarModelOutside = checkSidebarModelOutside;
    vm.addSidebarItem = addSidebarItem;
    vm.counter = vm.sidebar.length || 0;

    function checkSidebarModel (sidebarItem, i) {
        vm.sidebar[i].model = vm.sidebarItems[i].model;
    }

    function checkSidebarModelOutside () {
        angular.forEach(vm.sidebar, function (sidebar, i) {
            console.log(sidebar);
        });
    }

    function addSidebarItem (index) {
        var sidebarItem = angular.copy(vm.avaliableSidebarItems[index]);

        vm.counter += 1;
        sidebarItem.id = vm.counter;
        vm.sidebar.push(sidebarItem);
    }

    /*vm.sidebarOptions = AdminSidebarOptionsService;
    vm.sidebarItemCounter = 0;

    vm.sidebarItemsProxy = [];
    vm.addSidebarItemToProxy = addSidebarItemToProxy;
    vm.addSidebarItems = addSidebarItems;
    vm.removeSidebarItem = removeSidebarItem;
    vm.newSidebar = newSidebar;
    vm.errors = require('../errors/admin.client.sidebars.errors');

    vm.sidebar = {};
    vm.sidebarItem = {};
    vm.sidebarItems = [];
    vm.addSidebarItem = addSidebarItem;

    vm.logSidebarItems = logSidebarItems;*/

    /*var arr = [];
     var obj1 = { title: '1 This is a title' };
     var obj2 = {
     body: '<p>1 This is the body of the sidebar element. This will contain HTML content and' +
     ' other stuff.</p>'
     };

     var objMerge1 = _.merge(obj1, obj2);
     console.log(objMerge1);

     var obj3 = { title: '2 This is a title' };
     var obj4 = {
     body: '<p>2 This is the body of the sidebar element. This will contain HTML content and' +
     ' other stuff.</p>'
     };

     var objMerge2 = _.merge(obj3, obj4);
     console.log(objMerge2);

     arr.push(objMerge1, objMerge2);

     //var objFinal = _.merge({}, objMerge1, objMerge2);
     console.log(arr);*/

    /*function addSidebarItem (sidebarItem) {
        vm.sidebarItem.type = 'HTML Content';
        vm.sidebarItem.body = angular.element('.cke_wysiwyg_div').html() ||
            angular.element('.cke_source').val();

        vm.sidebarItems.push(vm.sidebarItem);

        console.log(vm.sidebarItems);
    }



    function addSidebarItemToProxy (sidebar, sidebarItemId) {
        var index = vm.sidebarOptions.indexOf(sidebar);
        vm.sidebarOptions[index].checked = !vm.sidebarOptions[index].checked;

        console.log(vm.sidebarOptions[index].checked);

        if (vm.sidebarOptions[index].checked === false) {
            for (var i = 0; i < vm.sidebarItemsProxy.length; i += 1) {
                if (vm.sidebarItemsProxy[i].sidebarItemId === sidebarItemId) {
                    vm.sidebarItemsProxy.splice(i, 1);
                }
            }
        } else {
            vm.sidebarItemsProxy.push({
                title: vm.sidebarOptions[index].title,
                type: vm.sidebarOptions[index].type,
                attr: vm.sidebarOptions[index].attr,
                sidebarItemId: sidebarItemId
            });
        }
    }

    function addSidebarItems () {

        // add sidebar proxy items to sidebarItems array
        angular.forEach(vm.sidebarItemsProxy, function (sidebarItem) {
            sidebarItem.sidebarItemId = vm.sidebarItemCounter += 1;
            vm.sidebarItems.push(sidebarItem);
        });

        angular.forEach(vm.sidebarOptions, function (sidebarOption) {
            sidebarOption.Selected = false;
            sidebarOption.checked = false;
        });

        vm.sidebarItemsProxy = [];
    }

    function logSidebarItems () {
        console.log('poop');
    }

    function removeSidebarItem (sidebarItem) {
        var index = vm.sidebarItems.indexOf(sidebarItem);
        vm.sidebarItems.splice(index, 1);
    }

    function newSidebar () {
        if ($scope.newSidebarForm.$valid) {
            var Sidebar = new AdminSidebarsAPIService({
                createdBy: $rootScope.auth.username,
                title: vm.sidebarOption.title,
                items: vm.sidebarItems
            });

            Sidebar.$save()
                .then(function (sidebar) {
                    $location.path('/sidebars/' + sidebar._id);
                })
                .catch(function (error) {
                    //vm.errorTitle = error.data.errors.title || '';
                });
        }
    }*/
}
