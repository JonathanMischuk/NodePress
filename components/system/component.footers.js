module.exports = {
    title: 'Footers',
    slug: 'footers',
    active: false,
    order: 5,
    appLevels: [
        'admin',
        'site'
    ],
    states: [],
    sections: [
        'components-menu'
    ],
    roles: [
        'Administration',
        'Editor'
    ],
    children: {
        'components-menu': {
            title: 'Footers',
            icon: 'view_day',
            state: 'np.footers'
        }
    }
};
