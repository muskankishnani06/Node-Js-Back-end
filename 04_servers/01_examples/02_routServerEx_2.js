import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to food corner");
  } else if (req.url === "/menu") {
    res.end("Here is our foof menu");
  } else if (req.url === "/orders") {
    res.end("Check your order ");
  } else if (req.url === "/offers") {
    res.end("today's specail offer");
  } else {
    res.end("page is not found");
  }
});

const port = 2005;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is runnig on ${port}`);
});
