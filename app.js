// Get Express module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

// for parsin multypart/form-data
const upload = multer();
const app = express();

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended :true }));

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

// redirect to page
app.get('/about', (req, res) => {
    res.redirect('/about.html');
});

// submit data into database
app.post('/subscribe', upload.array(), (req, res) => {
   let name  = req.body.name;
   let email = req.body.email;
   console.log(name, email);
});

app.listen(500, () => console.log('Server started on  port 500...'));