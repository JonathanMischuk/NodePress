'use strict';

var api = require('../../../../../admin/server/api'),
    async = require('async'),
    fs = require('fs');

// GET request: get single page content
module.exports = function (req, res, next) {
    //console.log(req.params.sidebar);

    async.parallel([
        getSidebarLeft
    ], function (err, results) {
        if (err) return new Error(err);

        //console.log('fuckers of course');

        res.json(results);
    });

    function getSidebarLeft (callback) {
        api.pagesAPI.models.Page.findOne({ slug: req.params.sidebar },
            function (err, page) {
                if (err) return next(err);

                return page;
            }).then(function (page) {
                console.log('hey buddy:', page);
                api.sidebarsAPI.models.Sidebar.findOne({ title: page.sidebarLeft },
                    function (err, sidebarLeft) {
                        if (err) return next(err);

                        console.log('flubbbbbber fuckers 4');

                        callback(null, sidebarLeft);
                    });
            });
    }
};
