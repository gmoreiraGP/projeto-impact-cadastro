//middlewares - singletons: commons js
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const port = 3200;
const server = express(); //novo servidor

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => {
    //template string (observe a crase)
    console.log(`servidor no ar, na porta ${port}`);
});

module.exports = server