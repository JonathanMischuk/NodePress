'use strict';

var Modules = require('../admin.client.register.module');

// angular pages module and module accessories
Modules.registerModule('footer');
require('./routes');
/*require('./services');
require('./controllers');*/

// exports module name as string for admin module dependency injection
module.exports = 'footer';
