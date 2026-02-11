const http = require('http');

const PORT = 8080;

const server = http.createServer((req,res) => {
   res.writeHead(200,{'Content-Type' :'text/html'});
    
    res.end('<h1>Hello World from node.js server!</h1><p>Your first webserver is running </p>');
});

server.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}/`);
    console.log('Press Ctl+c to stop the server');
}); 
