module.exports = {
    title: 'Menu',
    slug: 'menu',
    type: 'menu',
    active: false,
    sections: [
        'sidebar',
        'page',
        'footer'
    ],
    description: 'Add a menu to your sidebar',
    directive: 'sidebarItemMenu',
    directiveSlug: 'sidebar-item-menu',
    model: {
        title: '',
        body: ''
    },
    icon: 'toc',
    callback: 'sidebarItemMenuAugmentation'
};
