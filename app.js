const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routers/router');
const DB = require('./DB/DB');

const server = express();

server.use(bodyParser.json());

server.use(router);

server.listen(3000, async () => {
    await DB.connect();
});