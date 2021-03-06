const Chatroom = require('./sockets/Chatroom.js');
const debug = require('debug')('app:startup');  // set env 'export DEBUG='app:startup'
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

if (app.get('env') === 'development') {
  app.use(morgan('tiny')); 
  debug('Morgan enabled...');
}

// Set Static Dir.
app.use(express.static('public'));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.use(require('./routes/albums'));
app.use(require('./routes/chatroom'));
app.use(require('./routes/feedback'));
app.use(require('./routes'));

let server = app.listen(port, () => console.log(`Listening on port ${port}.`));

Chatroom.connect(server);

// Replaces -
// let io = socket(server); 

// io.on('connection', socket => {
//   socket.on('userPostMessage', message => {
//     io.emit('serverBroadcastMessage', message)
//   })
// }