import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Red & white skill education");
});

app.get("/courses", (req, res) => {
  res.json({
    course1: "FullStack Webdevelopment",
    course2: "Graphic designing",
    course3: "video editing",
    course4: "career Xi",
  });
});

app.get("/contact", (req, res) => {
  res.send("Contact here ");
});

const port = 1001;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`your server is running on ${port}`);
});
