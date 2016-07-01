module.exports = {
    title: 'Sidebars',
    slug: 'sidebars-dashboard',
    active: true,
    order: 4,
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
};
