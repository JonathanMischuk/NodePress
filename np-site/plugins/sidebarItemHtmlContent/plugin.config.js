module.exports = {
    title: 'HTML Content',
    slug: 'html-content',
    type: 'HTMLContent',
    active: false,
    sections: [
        'sidebar',
        'footer'
    ],
    description: 'Add HTML content to your sidebar',
    directive: 'sidebarItemHtmlContent',
    directiveSlug: 'sidebar-item-html-content',
    model: {
        title: '',
        body: ''
    },
    icon: 'code',
    callback: 'sidebarItemHTMLContentAugmentation'
};
