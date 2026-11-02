
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("about.html", (err, data) => {
    if (err) {
      console.log(err);
      return res.end("Failed to load about page");
    }

    res.end(data);
  });
});

const port = 2001;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Your server is running on ${port}`);
});
