'use strict';

module.exports = {
    getCategories: require('./admin.server.categories.getCategories.controller'),
    getCategory: require('./admin.server.categories.getCategory.controller'),
    newCategory: require('./admin.server.categories.newCategory.controller'),
    removeCategory: require('./admin.server.categories.removeCategory.controller'),
    updateCategory: require('./admin.server.categories.updateCategory.controller')
};
