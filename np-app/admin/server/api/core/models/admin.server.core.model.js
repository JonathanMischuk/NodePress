'use strict';

var db = require('../../../config/admin.server.db'),
    Core = db.Schema({
        title: {
            type: String,
            default: 'NodePress'
        },
        siteHomePage: {
            type: String,
            default: 'home'
        },
        theme: {
            type: String,
            default: 'default'
        },
        publishDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String
        }
    });

module.exports = db.model('Core', Core);
