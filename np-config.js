'use strict';

// to get app started set the app.title, app.description and port properties
module.exports = {
    app: {
        title: 'NodePress',
        description: 'A simple CMS made with the MEAN stack'
    },
    db: {
        uri: 'mongodb://localhost/nodepress-mongo'
    },
    port: process.env.PORT || 3000,
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
