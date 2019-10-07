"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = require('http').createServer(_app.default);

const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
console.log('deu certo');
io.on('connection', socket => {
  socket.on('update-status', async status => {
    socket.broadcast.emit(status);
  });
});
server.listen(PORT, HOST, () => console.log('Server listening on port ATUALIZADA', PORT));
//# sourceMappingURL=server.js.map