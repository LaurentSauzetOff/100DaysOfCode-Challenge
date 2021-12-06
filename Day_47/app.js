const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Coucou le monde !!!!!!!!!!</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(443);

// amazon.com => envoie d'une requete au serveur amazon
// amazon.com:80
