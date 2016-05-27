'use strict';

var Modules = require('../admin.client.register.module');

// angular app module and module accessories
Modules.registerModule('app');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'app';
