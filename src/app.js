const express = require('express');
const http = require('http');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 5000;
const server = http.createServer(app);
require('./socket')(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));;

app.get('/create-room', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'generatelink.html'));
  });

app.get('/api/create-room', (req, res) => {
    const roomId = uuidv4();
    const roomLink = `http://localhost:${PORT}/room/${roomId}`;
    res.json({ roomId, roomLink });
  });

app.get('/room/:roomId', (req, res) => {
res.sendFile(path.join(__dirname, 'client', 'index.html'));
});



// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

