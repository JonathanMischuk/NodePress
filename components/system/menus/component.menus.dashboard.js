module.exports = {
    title: 'Menus',
    slug: 'menus-dashboard',
    active: false,
    order: 3,
    appLevels: [
        'admin',
        'site'
    ],
    states: [],
    sections: [
        'dashboard'
    ],
    roles: [
        'Administration',
        'Editor'
    ],
    attributes: {
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
};
