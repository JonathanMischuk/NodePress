'use strict';

var config = require('./np-config'),
    app = require('./np-app/admin/server/config/admin.server.app')(config);

app.listen(config.port);
console.log('Express server started on port: ' + config.port);
