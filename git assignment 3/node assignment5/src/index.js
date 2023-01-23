var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url == "/") {
        res.end()
    } else if (req.url == "/welcome") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Welcome to Dominos!")
    } else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify({
            phone: 18602100000,
            email: 'guestcaredominos@jublfood.com'
        }))
    } else {
        res.writeHead(400, { "Content-type": "text/html" })
        res.end("<h1>404</h1>")
    }
}

module.exports = httpServer;

