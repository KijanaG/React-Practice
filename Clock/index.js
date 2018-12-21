var http = require('http');

var fs = require('fs');

var server = http.createServer((req, res) => {
    
    // console.log("Client Request URL: ", req.url);

    if(req.url == '/') {
        fs.readFile('woReact.html', 'utf8', (err, content) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(content);
            res.end();
        });
    } else {
        res.writeHead(400);
        res.end("File Not Found");
    }
});

server.listen(3000);

console.log("Running on port 3000");