var restify = require('restify');

/* Setup Restify Server */
var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978 , function(){
    console.log('%s listening to %s', server.name, server.url);
});

/* Serve a static web page */
server.get('/', restify.plugins.serveStatic({
    directory: __dirname,
    default: '/index.html'
}));

module.exports = server;