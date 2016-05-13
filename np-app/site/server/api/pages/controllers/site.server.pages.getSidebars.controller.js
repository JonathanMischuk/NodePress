'use strict';

var api = require('../../../../../admin/server/api'),
    async = require('async');

// GET request: get single page sidebars
module.exports = function (req, res, next) {
    async.parallel([
        getSidebarLeft,
        getSidebarRight
    ], function (err, results) {
        if (err) return new Error(err);

        return res.json(results);
    });

    function getSidebarLeft (callback) {
        api.pagesAPI.models.Page.findOne({ slug: req.params.page },
            function (err, page) {
                if (err) return next(err);

                return page;
            }).then(function (page) {
                api.sidebarsAPI.models.Sidebar.findOne({ title: page.sidebarLeft },
                    function (err, sidebarLeft) {
                        if (err) return next(err);

                        callback(null, sidebarLeft);
                    });
            });
    }

    function getSidebarRight (callback) {
        api.pagesAPI.models.Page.findOne({ slug: req.params.page },
            function (err, page) {
                if (err) return next(err);

                return page;
            }).then(function (page) {
                api.sidebarsAPI.models.Sidebar.findOne({ title: page.sidebarRight },
                    function (err, sidebarRight) {
                        if (err) return next(err);

                        callback(null, sidebarRight);
                    });
            });
    }
};
