module.exports = {
    title: 'Menus',
    slug: 'menus',
    active: false,
    order: 3,
    appLevels: [
        'admin',
        'site'
    ],
    states: [],
    sections: [
        'components-menu',
        'dashboard'
    ],
    roles: [
        'Administration',
        'Editor'
    ],
    children: {
        'components-menu': {
            title: 'Menus',
            icon: 'toc',
            state: 'np.menus'
        },
        'dashboard': {
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
        }
    }
};
