'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/categories', controller.getCategories);
    app.post('/api/categories', controller.newCategory);
    app.get('/api/categories/:categoryId', controller.getCategory);
    app.put('/api/categories/:categoryId', controller.updateCategory);
    app.delete('/api/categories/:categoryId', controller.removeCategory);
};
