'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    Page = db.Schema({
        createdBy: {
            type: String
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String
        },
        category: {
            type: String,
            default: 'Uncategorized'
        },
        body: {
            type: String
        },
        sidebarLeft: {
            type: String,
            default: ''
        },
        sidebarRight: {
            type: String,
            default: ''
        },
        publishDate: {
            type: Date,
            default: Date.now
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String
        }
    });

Page.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Page', Page);
