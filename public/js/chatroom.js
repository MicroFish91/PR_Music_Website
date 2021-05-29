import { adjustTime } from './helpers/dateHelpers.js';

const socket = io();
const chatroomForm = document.querySelector('.chatroom-form');
const message = document.querySelector('#form-chat-message');
const username = document.querySelector('#form-chat-username');

// Outbound
chatroomForm.addEventListener('submit', e => {
  e.preventDefault();

  socket.emit('userPostMessage', {
    username: username.value,
    message: message.value,
    time: Date.now()
  })

  message.value = "";
});

// Inbound
socket.on('serverBroadcastMessage', message => {
    const chatroomDisplay = document.querySelector('.chatroom-messages');
    const newTime = adjustTime(message.time);
    let newMessage = '';

    // Identify incoming message
    if (username.value === message.username) {
      newMessage += '<div class="message message-yours">';
    }
    else {
      newMessage += '<div class="message">';
    }

    newMessage += `<span class="message-time">${newTime}&nbsp</span>`;
    newMessage += `<span class="message-user">${message.username}: </span>`;
    newMessage += `<span class="message-message">${message.message}</span></div>`;

    chatroomDisplay.innerHTML = newMessage + chatroomDisplay.innerHTML;
});