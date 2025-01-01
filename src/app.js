const express = require('express');
const http = require('http');
const app = express();
const PORT = 5000;
const server = http.createServer(app);
require('./socket')(server);

// Example route
app.get('/', (req, res) => {
    res.send('Express server is running!');
});


// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// Export the server instance
module.exports = server;
