import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text / html" });
  res.end("<h1>hello from custom server</h1>");
});

const port = 5001;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("server running on 5001");
});
