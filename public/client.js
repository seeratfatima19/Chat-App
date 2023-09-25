
var socket = io();
const messageInput = document.getElementById('message-input');

let usrName;

do{
    usrName= prompt('Enter your name to join the chat');
}while(!usrName);

const form = document.getElementById('send-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message != '') {
        socket.emit('send-chat-message', message);
        messageInput.value = '';

        // append message to chat container
        msg = { message: message, type: 'right' };
        appendMessage(msg);

    }
});

// checking message recieved from server

socket.on('chat-message', message => {
    console.log('message received from server', message);
    appendMessage(message);
});



function appendMessage(message)
{
    const chatContainer = document.querySelector('.chat-container');
    console.log(chatContainer);
        var messageElement = document.createElement('div');
        messageElement.innerHTML = message.message;
        console.log(messageElement.innerHTML);
        messageElement.classList.add('message');

        if(message.type=='right')
        {
            messageElement.classList.add('right-message');
        }
        if(message.type=='left'){
            messageElement.classList.add('left-message');
        }
        
        chatContainer.appendChild(messageElement);

}