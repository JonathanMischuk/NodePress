'use strict';

// angular users module and module accessories
require('./admin.client.users.module');
require('./routes');
require('./services');
require('./controllers');
require('./directives');

// exports module name as string for admin module dependency injection
module.exports = 'users';
