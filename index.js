const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT);
app.get('/', function (req, res) {
    res.sendFile(INDEX);
});
