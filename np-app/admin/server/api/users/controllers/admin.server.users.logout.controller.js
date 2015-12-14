'use strict';

// GET request: logout
module.exports = function(req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/np-admin/login');
};
