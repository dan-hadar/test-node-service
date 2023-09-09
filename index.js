const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle unhandled exceptions
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'all ok!' });
});

// Middleware for handling route not found
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
