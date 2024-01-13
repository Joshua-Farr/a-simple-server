import { WebSocket } from "ws";

const PORT_NUMBER = 3000;

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
  console.log("HERE IS THE RESULT: ", message === "connected", typeof message);
  if (message === {"connected"}) {
    console.log(`YOU HAVE SUCCESSFULLY CONNECTED TO THE SERVER ON PORT 3000`);
  } else {
    console.log(`Message from the server: ${message}`);
  }
});

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
