// const chatLog = document.getElementById('chatLog');
// const sendMessageBtn = document.getElementById('sendMessage');
// const messageInput = document.getElementById('message');

// console.log("got here 1")

// // Extract roomId from URL
// const urlParts = window.location.pathname.split('/');
// const roomId = urlParts[urlParts.length - 1];

// if (!roomId) {
//   alert('Invalid room URL');
//   window.location = '/create-room'; // Redirect to create-room page
// }

// // Connect to WebSocket server
// const socket = new WebSocket(`ws://${window.location.host}`);
// console.log(socket)

// socket.addEventListener('open', () => {
//   console.log('Connected to WebSocket server');
//   socket.send(JSON.stringify({ type: 'join', roomId }));
// });

// socket.addEventListener('message', (event) => {
//   const data = JSON.parse(event.data);

//   if (data.error) {
//     alert(data.error);
//     return;
//   }

//   chatLog.value += `${data.content}\n`; // Append message to chat log
// });

// sendMessageBtn.addEventListener('click', () => {
//   const message = messageInput.value.trim();

//   if (!message) {
//     alert('Please enter a message!');
//     return;
//   }

//   socket.send(JSON.stringify({ type: 'message', roomId, content: message }));
//   messageInput.value = ''; // Clear input
// });

// socket.addEventListener('close', () => {
//   console.log('Disconnected from WebSocket server');
// });

// socket.addEventListener('error', (error) => {
//   console.error('WebSocket error:', error);
// });
