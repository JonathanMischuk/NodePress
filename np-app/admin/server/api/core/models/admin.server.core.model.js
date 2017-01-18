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
        siteHomePageString: {
            type: String,
            default: 'Home'
        },
        theme: {
            type: String,
            default: 'default'
        },
        skin: {
            type: String,
            default: 'dark'
        },
        plugins: [],
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
