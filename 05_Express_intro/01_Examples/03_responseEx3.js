import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcomme to Movie Server");
});

app.get("/about", (req, res) => {
  res.send("This is Movie about Page");
});

app.get("/movie", (req, res) => {
  res.send({
    name: "obssession",
    year: 2026,
  });
});

const movie = {
  name: "obssession",
  year: 2026,
};

app.get("/json", (req, res) => {
  res.status(200).json({
    message: "Movie data fetched successfully ",
    movie,
  });
});

const port = 2000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on port ${port}`);
});
