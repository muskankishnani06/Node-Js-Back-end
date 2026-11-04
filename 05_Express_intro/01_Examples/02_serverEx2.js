import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to our website");
});

app.get("/product", (req, res) => {
  res.json({
    product: "Laptop",
    model: "Lenovo Loq",
    price: "100000",
    available: "true",
  });
});

const port = 1002;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});
