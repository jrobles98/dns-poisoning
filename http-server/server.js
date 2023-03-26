'use strict';

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('certs/httpsKey.key', 'utf8');
var certificate = fs.readFileSync('certs/httpsCrt.crt', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

// Constants
const HTTP_PORT = 80;
const HTTPS_PORT = 443;

app.get('/', (req, res) => {
    res.send('Hello!');
});

// Dummy endpoint mock call
app.get('/dummy-route/info', (req, res) => {
    res.status(200).send('1');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT);
httpsServer.listen(HTTPS_PORT);