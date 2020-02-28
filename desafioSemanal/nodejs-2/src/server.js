'use strict'

const restify = require('restify')

const server = restify.createServer({
    name: 'monty-python-generator',
    version: '1.0.0',
});

server.get('/v1/quote', async (req, res, next) => {
    res.send(501)
});

server.get('/v1/quote/:actor', async (req, res, next) => {
    res.send(501)
});

const start = async (port = 8080) => {
    server.listen(port, function () {
        console.info('%s listening at %s', server.name, server.url);
    });
}

const stop = () => {
    server.close(() => {
        console.info('Server Stopped')
    })
}

module.exports = {
    start,
    stop
}
