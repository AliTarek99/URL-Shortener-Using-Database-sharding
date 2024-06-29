const express = require('express');
const router = require('./Routers/router');

const server = express();

server.use(router);

server.listen(3000);