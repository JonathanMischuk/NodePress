'use strict';

var api = require('../../../../../admin/server/api'),
    async = require('async'),
    fs = require('fs');

// GET request: get single page content
module.exports = function (req, res, next) {

    async.parallel([
        getPage,
        getSidebarLeft,
        getSidebarRight
    ], function (err, results) {
        if (err) return new Error(err);
        res.json(results);
    });

    function getPage (callback) {
        api.pagesAPI.models.Page.findOne({ slug: req.params.page },
            function (err, page) {
                if (err) return next(err);
                callback(null, page);
            });
    }

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
