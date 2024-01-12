import { WebSocket } from "ws";

// Establishing a new WebSocket
const myWebSocket = new WebSocket("ws://localhost:3000");

const sampleMessageJSON = {
  id: 1,
  sender: "Alice",
  recipient: "Bob",
  message: "Hey, how are you?",
  timestamp: "2024-01-11T15:30:00Z",
};

// Once the webSocket is live, the message is sent
myWebSocket.onopen = (event) => {
  myWebSocket.send("Here's some text that the server is urgently awaiting!");
  console.log("Message Sent!");
};

export const sendMessageToServer = (sender, recipient, message) => {
  const messageJSON = {
    sender: sender,
    recipient: recipient,
    message: message,
    timestamp: new Date().getTime(), // Timestamp of when the message was sent
  };

  myWebSocket.send(JSON.stringify(messageJSON));
  console.log(`Sent message to server: ${messageJSON}`);
};
