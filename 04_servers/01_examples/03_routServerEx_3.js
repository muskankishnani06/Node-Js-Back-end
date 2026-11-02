import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to learn online");
  } else if (req.url === "/html") {
    res.end("Learn Html");
  } else if (req.url === "/javascript") {
    res.end("Learn JavaScript");
  } else if (req.url === "/nodejs") {
    res.end("Learn Node.js");
  } else {
    res.end("page not found");
  }
});

const port = 2007;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is running on 2007`);
});
