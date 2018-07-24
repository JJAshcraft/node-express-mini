// require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const express = require('express');
const db = require('./data/db');

// creates an express application using the express module
const server = express();
const iasip = [
    {"id": 1,
     "name": "MAC"},
    {"id": 2,
     "name": "Charlie"},
    {"id": 3,
     "name": "Dennis"},
     {"id": 4,
     "name": "DeeDee"},
]
server.get('/', (req, res) => {

    res.send('what up');
});

server.get('/users', (req, res) => {
    res = res;
    let result = db.find();
    result.then(response => {
        res.status(200).json(response);
    })
});

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/sunny', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
//   res.send('Hello World');
   
  res.status(200).json(iasip)
  
});

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000'));