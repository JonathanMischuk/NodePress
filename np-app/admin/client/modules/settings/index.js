'use strict';

var Modules = require('../admin.client.register.module');

// angular settings module and module accessories
Modules.registerModule('settings');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'settings';
