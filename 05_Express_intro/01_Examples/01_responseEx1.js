import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Restaurant server");
});

app.get("/about", (req, res) => {
  res.send("This is Our Restaurant");
});

app.get("/menu", (req, res) => {
  res.json({
    food: "Pizza",
    price: 250,
    category: "Fast food",
  });
});

const port = 5002;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});
