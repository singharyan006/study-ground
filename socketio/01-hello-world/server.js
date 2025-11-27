// server.js
// Node.js code for 01-hello-world
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/client.html');
});

io.on('connection', (data) => {
    console.log('User connected:', Socket.id);

    socket.on('message', (data) => {
        console.log('Received from client:', data);
        socket.emit('reply', 'Hello from server!');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});