// The 'net' module is a part of Node. It is used for creating
// and communicating with TCP servers.
const net = require("net");

const server = net.createServer(socket => {
  // This callback will be called whenever a client
  // requests a connection from this server program.

  // It will be called once per client or once per connection.

  // The first argument passed to this callback is a
  // "socket" object. It represents the connection. It has
  // to send and receive data, to close the connection,
  // to check for errors, etc.

  console.log("--- Opened Connection ----");

  //   socket.on(<socket-event>, <callback>)
  // This method is called an event listener. We can
  // use it to react to things that happen on
  // our sever's connection, the sockets, such
  // as receiving data.

  // - The first arg. is a string named after an event.
  // you can find the list of events here:
  // https://nodejs.org/api/net.html
  //- The second arg. is a callback that will be called when the event is triggered
  socket.on("data", data => {
    console.log("Server got: ", data.toString());
    socket.write(Math.max(...data.toString().split(',')).toString());
  });

  socket.on("end", () => {
    console.log("--- Closed Connection ---");
  });
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning at ${ADDRESS}:${PORT}`);
});
