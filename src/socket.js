const WebSocket = require('ws');

const socket = (server) => {
  const wss = new WebSocket.Server({ server });
  const rooms = {};

  wss.on('connection', (ws) => {
    console.log("Client connected");

    // Send a welcome message to the new client
    ws.send(JSON.stringify({ content: "Welcome to the chat!" }));

    ws.on('message', (message) => {
      const { type, roomId, content } = JSON.parse(message);

      if (type === 'join') {
        // Join the room
        ws.roomId = roomId;
        rooms[roomId] = rooms[roomId] || [];
        rooms[roomId].push(ws);
      }

      if (type === 'message') {
        // Broadcast message to all users in the room
        rooms[roomId]?.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ content })); 
          }
        });
      }      
    });

    ws.on('close', () => {
      // Clean up room on disconnect
      const roomId = ws.roomId;
      rooms[roomId] = rooms[roomId]?.filter(client => client !== ws);
      if (rooms[roomId]?.length === 0) delete rooms[roomId];
    });
  });

  console.log("WebSocket server is running...");
};

module.exports = socket;
