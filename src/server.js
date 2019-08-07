import App from './app';

const server = App;

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => console.log('Server listening on port', PORT));
