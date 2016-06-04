module.exports = {
    title: 'Pages',
    slug: 'pages-dashboard',
    active: false,
    order: 1,
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
};
