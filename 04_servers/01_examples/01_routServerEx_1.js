import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to city hospital");
  } else if (req.url === "/doctors") {
    res.end("meet our doctors");
  } else if (req.url === "/appointment") {
    res.end("book your appointments");
  } else if (req.url === "/departments") {
    res.end("our hospital departments");
  } else {
    res.end("page not found");
  }
});

const port = 2003;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is runnig on ${port}`);
});
