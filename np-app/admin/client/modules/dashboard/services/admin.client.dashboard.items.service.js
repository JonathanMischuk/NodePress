'use strict';

var angular = require('angular');

module.exports = angular.module('dashboard')
    .factory('AdminDashboardItemsService', AdminDashboardItemsService);

function AdminDashboardItemsService() {
    return [
        {
            title: 'Pages',
            slug: 'pages',
            emptyMessage: 'No pages exist yet',
            headerLinks: [
                {
                    state: 'np.pages',
                    message: 'All pages',
                    icon: 'view_list'
                },
                {
                    state: 'np.newPage',
                    message: 'New page',
                    icon: 'add'
                }
            ],
            itemLinks: [
                {
                    icon: 'open_in_browser'
                }
            ],
            items: null
        },
        {
            title: 'Categories',
            slug: 'categories',
            emptyMessage: 'No categories exist yet',
            headerLinks: [
                {
                    state: 'np.categories',
                    message: 'All categories',
                    icon: 'view_list'
                },
                {
                    state: 'np.newCategory',
                    message: 'New category',
                    icon: 'add'
                }
            ],
            items: null
        },
        {
            title: 'Menus',
            slug: 'menus',
            emptyMessage: 'No menus exist yet',
            headerLinks: [
                {
                    state: 'np.menus',
                    message: 'All menus',
                    icon: 'view_list'
                },
                {
                    state: 'np.newMenu',
                    message: 'New menu',
                    icon: 'add'
                }
            ],
            items: null,
            extraLinks: [
                {
                    title: 'Manage Menu Locations',
                    state: 'np.manageMenus'
                }
            ]
        },
        {
            title: 'Sidebars',
            slug: 'sidebars',
            emptyMessage: 'No sidebars exist yet',
            headerLinks: [
                {
                    state: 'np.sidebars',
                    message: 'All sidebars',
                    icon: 'view_list'
                },
                {
                    state: 'np.newSidebar',
                    message: 'New sidebar',
                    icon: 'add'
                }
            ],
            items: null
        }
    ];
}
