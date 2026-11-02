import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("student.html", (err, data) => {
    if (err) {
      res.end("failed to load the page");
    }

    res.end(data);
  });
});

const port = 2000;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is runnig on ${port}`);
});
