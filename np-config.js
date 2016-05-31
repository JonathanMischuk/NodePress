'use strict';

// to get app started set the app.title, app.description and port properties
module.exports = {
    app: {
        title: 'NodePress',
        description: 'A simple CMS made with the MEAN stack'
    },
    db: {
        uri: 'mongodb://localhost/nodepress-multi-apps'
    },
    port: process.env.PORT || 3006,
    templateEngine: 'swig',
    sessionSecret: 'nodepress',
    sessionCollection: 'sessions',
    sessionCookie: {
        path: '/',
        httpOnly: true,
        maxAge: null
    },
    sessionName: 'connect.sid',
    baseUrl: __dirname
};
