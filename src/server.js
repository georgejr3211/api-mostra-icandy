import App from './app';

const PORT = process.env.PORT || 3000;

const server = App.listen(PORT, () => console.log('Server listening on port', PORT));
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  socket.on('update-status', async (status) => {
    socket.broadcast.emit(status);
  });
});

// const server = require('http').createServer(App);
// const io = require('socket.io')(server);

// const HOST = '0.0.0.0';

// console.log('deu certo');

// server.listen(PORT, HOST, () => console.log('Server listening on port', PORT));
