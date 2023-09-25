
var socket = io();
const messageInput = document.getElementById('message-input');

let usrName;

do{
    usrName= prompt('Enter your name to join the chat');
}while(!usrName);

messageInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' && messageInput.value != ''){
        socket.emit('send-chat-message', messageInput.value);
        messageInput.value = '';
    }
}   );

/*
console.log("client running");
const chatContainer = document.querySelector('chat-container');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('message-input');

const namePrompt  = prompt('Enter your name to join the chat');

socket.emit('new-user', namePrompt);

*/