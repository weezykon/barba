const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Frontend
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server Listening to PORT ${PORT}`);
})