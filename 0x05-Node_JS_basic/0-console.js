//In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argumet.



const http = require('http');//importing the http module

const hostname = '127.0.01'//host ip
const port = 3000;// port numer for servwer

//creating the server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // http stastus code means ok
    res.setHeader('Content-Type', 'text/plain'); //setting response heasder to text
    res.end('displayMesssage\n');//sending the response
});


//startting the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
