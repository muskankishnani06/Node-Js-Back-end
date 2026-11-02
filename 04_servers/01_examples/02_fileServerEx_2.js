import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("contact.html", (err, data) => {
    if (err) {
      res.end("faild to load contact page");
    }

    res.end(data);
  });
});

const port = 2001;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is runnig on ${port}`);
});
