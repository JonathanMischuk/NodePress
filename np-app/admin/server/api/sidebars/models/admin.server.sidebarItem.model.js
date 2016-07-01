'use strict';

var db = require('../../../config/admin.server.db'),
    SidebarItem = db.Schema({
        title: {
            type: String
        },
        slug: {
            type: String
        },
        type: {
            type: String
        },
        directive: {
            type: String
        },
        directiveSlug: {
            type: String
        },
        model: {
            title: {
                type: String
            },
            body: {
                type: String
            }
        },
        content: {
            title: {
                type: String
            },
            body: {
                type: String
            }
        },
        callback: {
            type: String
        },
        id: {
            type: Number
        }
    });

module.exports = SidebarItem;
