'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const vision = require('vision');
const inert = require('inert');
const handlebars = require('handlebars');

server.connection({
    port: 6300
});

server.register([vision, inert], err => {
    if (err) {
        throw err;
    }

    server.views({
        engines: {
            html: handlebars
        },
        path: 'views',
        layoutPath: 'views/layout',
        layout: 'default',
        partialsPath: 'views/partials',
        helpersPath: 'views/helpers'
    });
});

server.route([{
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
        reply.view('home', {
            title: 'test page',
            message: 'hello world'
        })
    }
}, {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
        directory: {
            path: 'public',
            redirectToSlash: true,
            index: true
        }
    }
}]);

server.start(err => {
    if (err) {
        throw err;
    }

    console.log(`Server started at ${server.info.uri}`);
});

// Needed for injection testing
module.exports = server;
