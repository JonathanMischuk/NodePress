module.exports = {
    title: 'Users',
    slug: 'users',
    active: false,
    order: 6,
    appLevels: [
        'admin',
        'site'
    ],
    states: [],
    sections: [
        'components-menu'
    ],
    roles: [
        'Administration'
    ],
    children: {
        'components-menu': {
            title: 'Users',
            icon: 'supervisor_account',
            state: 'np.users'
        }
    }
};
