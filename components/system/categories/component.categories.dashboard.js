module.exports = {
    title: 'Categories',
    slug: 'categories-dashboard',
    active: false,
    order: 2,
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
};
