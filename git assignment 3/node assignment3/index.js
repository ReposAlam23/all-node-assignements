const fs = require("fs")
const http = require("http")
const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File operations</title>
</head>
<body>
<h1> Hello World </h1>
<p> This is Mohammad Alam</p>
</body>
</html>`

fs.writeFile("index.html", content, (err) => {
    console.log(err)
})
//================= creating server  ========

const server = http.createServer((req, res) => {
    const url = req.url.split("?")[0]
    if (url == "/") {
        res.writeHead(200, { "Content-type": "text/html" })
        fs.readFile("index.html", (err, data) => {
            res.write(data)
            res.end()
        })
    }
})
server.listen(5000, () => { console.log("server live at 5000 port") })