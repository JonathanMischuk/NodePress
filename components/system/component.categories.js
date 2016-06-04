module.exports = {
    title: 'Categories',
    slug: 'categories',
    active: false,
    order: 2,
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
        'Administration'
    ],
    children: {
        'components-menu': {
            title: 'Categories',
            icon: 'subtitles',
            state: 'np.categories'
        },
        'dashboard': {
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
        }
    }
};
