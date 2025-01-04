const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // 假设前端文件放在public文件夹中

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        io.emit('message', { message }); // 将消息广播给所有连接的客户端
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
