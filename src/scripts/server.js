import { WebSocketServer } from "ws";

const PORT_NUMBER = "3000";

console.log(`SERVER IS ACTIVE ON PORT: ${PORT_NUMBER}`);

const serverSocket = new WebSocketServer({ port: PORT_NUMBER });
serverSocket.on("connection", (socket) => {
  console.log(`Client is now connected to the server on PORT:${PORT_NUMBER}!`);
  socket.send("connected");

  socket.on("message", (message) => {
    console.log(
      `Here is the message the server recieved fromt the client: ${message}`
    );
  });
});
