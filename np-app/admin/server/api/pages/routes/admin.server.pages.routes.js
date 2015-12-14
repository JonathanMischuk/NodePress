'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/pages', controller.getPages);
    app.post('/api/pages', controller.newPage);
    app.get('/api/pages/:pageId', controller.getPage);
    app.put('/api/pages/:pageId', controller.updatePage);
    app.delete('/api/pages/:pageId', controller.removePage);
};
