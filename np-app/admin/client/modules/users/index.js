'use strict';

var Modules = require('../admin.client.register.module');

// angular users module and module accessories
Modules.registerModule('users');
require('./routes');
require('./services');
require('./controllers');
require('./directives');

// exports module name as string for admin module dependency injection
module.exports = 'users';
