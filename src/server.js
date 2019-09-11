import App from './app';
import * as pedidoService from './api/v1/pedidos/service';

const server = require('http').createServer(App);
const io = require('socket.io')(server);

// const server = App;

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

io.on('connection', (socket) => {
  socket.on('update-status', async (status) => {
    socket.broadcast.emit(status);
  });
});

server.listen(PORT, HOST, () => console.log('Server listening on port', PORT));
