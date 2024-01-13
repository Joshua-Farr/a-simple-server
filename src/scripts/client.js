import { WebSocket } from "ws";
import dotenv from "dotenv";

dotenv.config();

const PORT_NUMBER = process.env.SERVER_PORT_NUMBER || 3001;

// Establishing a new WebSocket
const myWebSocket = new WebSocket(`ws://localhost:${PORT_NUMBER}`);

const sampleMessageJSON = {
  id: 1,
  sender: "Alice",
  recipient: "Bob",
  message: "Hey, how are you?",
  timestamp: "2024-01-11T15:30:00Z",
};

// Once the webSocket is live, the message is sent
myWebSocket.onopen = (event) => {
  myWebSocket.send("Client is now connected");
  sendMessageToServer("Josh", "Joe Mama", "Hello there!");
  console.log("Message Sent!");
};

myWebSocket.on("message", (message) => {
  message = message.toString("utf8");
  if (message === "connected") {
    // Waiting to hear back from the server once connected!
    console.log(`Successful connection to server on PORT:${PORT}`);
  } else {
    console.log(`Message from the server: ${message}`);
  }
});

// Setting up functionality to send messages to the server
export const sendMessageToServer = (sender, recipient, message) => {
  const messageJSON = {
    sender: sender,
    recipient: recipient,
    message: message,
    timestamp: new Date().toISOString(), // Timestamp of when the message was sent
  };

  myWebSocket.send(JSON.stringify(messageJSON));
  console.log(`Message sent to server: ${messageJSON}`);
};
