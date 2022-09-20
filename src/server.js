const {read, write} = require('./utils/FS')
const http = require('http')

const options = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

const server = http.createServer((req, res) => {

    // let param = req.url.split('/')[2]

    if(req.method === 'GET'){
        if(req.url === '/films'){
            res.writeHead(200, options)
            res.end(JSON.stringify({
                status: 200,
                data: read('films.json')
            }))
        }
        if(req.url === '/genres'){
            res.writeHead(200, options)
            res.end(JSON.stringify({
                status: 200,
                data: read('genres.json')
            }))
        }
    }
})

server.listen(8000, console.log(8000))