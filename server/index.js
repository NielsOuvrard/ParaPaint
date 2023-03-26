const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('entered-nickname', (data) => {
        console.log('Client logged in with nickname : ', data);
        socket.broadcast.emit('client-logged', data);
    });

    socket.on('get-png', (data) => {
        console.log('server >> get-png', data);
        socket.broadcast.emit('send-png', data)
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
