

/* const io=require('socket.io')(3000);

const users = {};

io.on('connection', socket => {

    console.log("server running");
    
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
        console.log('user connected', name);
    });
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });
}
);
*/

const express = require('express');
const app = express();
const server= require('http').createServer(app);
const PORT = process.env.PORT || 3000;




app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



// socket code 

const users={};



const {Server}= require('socket.io');

const io   = new Server(server);

io.on('connection', socket => {

    console.log("socket connected...");

    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
        console.log('user connected', name);
    });
    socket.on('send-chat-message', message => {
        console.log('message received', message);
        socket.broadcast.emit('chat-message', { message: message, type: 'left' });

        
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });

});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
