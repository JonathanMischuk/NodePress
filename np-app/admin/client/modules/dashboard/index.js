'use strict';

var Modules = require('../admin.client.register.module');

// angular dashboard module and module accessories
Modules.registerModule('dashboard');
require('./routes');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'dashboard';
