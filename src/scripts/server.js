import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// import crypto from "crypto";

dotenv.config();

const PORT_NUMBER = process.env.SERVER_PORT_NUMBER || 3001;

const payload = "Hello this is the payload";

// const key = crypto.randomBytes(48).toString("hex");

const token = jwt.sign(payload, process.env.SECRET_KEY);

console.log(`SERVER IS ACTIVE ON PORT: ${PORT_NUMBER}`);

const serverSocket = new WebSocketServer({ port: PORT_NUMBER });

serverSocket.on("connection", (socket) => {
  socket.send("connected");

  socket.on("message", (message) => {
    console.log(
      `Here is the message the server recieved fromt the client: ${message}`
    );
  });
});
