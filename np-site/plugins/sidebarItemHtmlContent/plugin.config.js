module.exports = {
    title: 'HTML Content',
    slug: 'html-content',
    type: 'HTMLContent',
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
