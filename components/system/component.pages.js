module.exports = {
    title: 'Pages',
    slug: 'pages',
    active: false,
    order: 1,
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
            title: 'Pages',
            icon: 'web',
            state: 'np.pages'
        },
        'dashboard': {
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
        }
    }    
};
