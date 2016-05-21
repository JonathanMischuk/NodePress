'use strict';

module.exports = function (app) {
    var controller = require('../controllers'),
        middleware = require('../middleware');

    // configure initial core settings in case of emergency!
    app.use(middleware.initCoreSettings);

    app.get('/api/settings', controller.getCoreSettings);
    app.put('/api/settings', controller.updateCoreSettings);

    // load core template and settings
    app.use('/np-admin/*', controller.loadCoreTemplate);
};
