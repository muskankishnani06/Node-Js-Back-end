
// server is computer systen=m which accept the user request and as per user request it will respond with necessary action

import http from "http";

const server = http.createServer((req, res) => {
  res.write("hello from server");
  res.end();
});

const port = 5000;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("server running on port 5000");
});
