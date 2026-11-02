import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home");
  } else if (req.url === "/about") {
    res.end("this is about page");
  } else if (req.url === "/service") {
    res.end("this is service page");
  } else if (req.url === "/help") {
    res.end("this is help page");
  } else {
    res.end("requested page not found");
  }
});

const port = 2002;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});
