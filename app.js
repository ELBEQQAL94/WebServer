// Get Express module
const express = require('express');
const app = express();

// Get path module from Nodejs module
const path = require('path');

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(500, () => console.log('Server started on  port 500...'));