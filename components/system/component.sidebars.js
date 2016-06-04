module.exports = {
    title: 'Sidebars',
    slug: 'sidebars',
    active: false,
    order: 4,
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
            title: 'Sidebars',
            icon: 'view_week',
            state: 'np.sidebars'
        },
        'dashboard': {
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
    }
};
