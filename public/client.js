
const socket = io('http://localhost:3000');

console.log("client running");
const chatContainer = document.querySelector('chat-container');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('message-input');

const namePrompt  = prompt('Enter your name to join the chat');

socket.emit('new-user', namePrompt);