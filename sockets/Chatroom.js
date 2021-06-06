let connection = null;

class Chatroom {
  constructor() {
      this._socket = null;
  }

  connect(server) {
    const io = require('socket.io')(server);

    // io.use(function(socket, next) {
    //   sessionMiddleware(socket.request, socket.request.res, next);
    // });
    
    io.on('connection', (socket) => {
        this._socket = socket; 
        this._socket.on('userPostMessage', message => this.userPostMessageEmitter(io, message));
        this._socket.on('disconnect', () => this.disconnectMessage());
        console.log(`New socket connection: ${socket.id}`);
    });
  }

  disconnectMessage(){
    console.log(this._socket.id,"socket disconnected")
  }

  userPostMessageEmitter(io, message) {
    io.emit('serverBroadcastMessage', message)
  }

  static init(server) {
      if(!connection) {
          connection = new Chatroom();
          connection.connect(server);
        //   connection.connect(server,sessionMiddleware);
      }
  }

  static getConnection() {
      if(!connection) {
          throw new Error("no active connection");
      }
      return connection;
  }
}

module.exports = {
    connect: Chatroom.init,
    connection: Chatroom.getConnection 
}