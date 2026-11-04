import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Employee Server");
});

app.get("/about", (req, res) => {
  res.send("This is Employee About Page");
});

const employee = {
  name: "Sergio Martina",
  age: "30",
  role: "Developer",
};

app.get("/employee", (req, res) => {
  res.status(200).json({
    message: "Employee data fetch successfully",
    employee,
  });
});

const port = 2004;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is runnig on ${port}`);
});
