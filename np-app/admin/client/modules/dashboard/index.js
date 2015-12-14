'use strict';

// angular dashboard module and module accessories
require('./admin.client.dashboard.module');
require('./routes');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'dashboard';
