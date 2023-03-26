const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('entered-nickname', (data) => {
        console.log('Client2 logged in with nickname : ', data);
        socket.broadcast.emit('client-logged', data);
    });

    socket.on('ready-to-play', (data) => {
        console.log('Client1 logged in with nickname : ', data);
        socket.broadcast.emit('client1-ready', data);
    });

    socket.on('player-finished', (png, score) => {
        console.log('server >> player-finished >> too long');
        socket.broadcast.emit('client-finished', png, score)
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
