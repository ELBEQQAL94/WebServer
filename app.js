// Get Express module
const express = require('express');
const app = express();

// Get path module from Nodejs module
const path = require('path');

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Get json data
app.get('/users', (req, res) => {
    let users = [
        {
            name : 'Youssef',
            lname : 'ELBEQQAl',
            age : 24
        },

        {
            name : 'Fatima',
            lname : 'ELOUTHMANI',
            age : 22
        },
        {
            name : 'Ghaya',
            lname : 'ELBEQQAl',
            age : 2
        }
    ];
    res.json(users);
});

// Get PDF file
app.get('/download', (req, res) => {
   res.download(path.join(__dirname, '/download/pdf.pdf'));
});

app.listen(500, () => console.log('Server started on  port 500...'));