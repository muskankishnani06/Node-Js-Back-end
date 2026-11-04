import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our restaurant");
});

app.get("/food", (req, res) => {
  res.send({
    item: "cheese pizza",
    size: "medium",
    price: "400",
  });
});

const port = 2003;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});
