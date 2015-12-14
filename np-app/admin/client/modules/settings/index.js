'use strict';

// angular settings module and module accessories
require('./admin.client.settings.module');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'settings';
