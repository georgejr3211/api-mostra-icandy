import App from './app';

const server = require('http').createServer(App);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

console.log('API /ATUALIZADA');

io.on('connection', (socket) => {
  socket.on('update-status', async (status) => {
    socket.broadcast.emit(status);
  });
});

server.listen(PORT, HOST, () => console.log('Server listening on port', PORT));
