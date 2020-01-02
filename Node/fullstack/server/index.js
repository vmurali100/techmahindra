const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/newUsers", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log("Connected");
  });

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fname: String,
    email: String
  })
);
const port = 8080;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello I amm sending person" });
});

app.get("/getAllUsers", (req, res) => {
  res.status(200).send({ data: users });
});

app.post("/createUser", (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  user.save().then(() => {
    console.log("User Saved Successfully");
  });
  res.status(201).send({ data: users });
});

app.delete("/deleteUser/:id", (req, res) => {
  console.log(req.params.id);
  let id = req.params.id;
  users.splice(id, 1);
  res.status(200).send({ data: users });
});

app.put("/updateUser/:id", (req, res) => {
  let i = req.params.id;
  let obj = req.body;
  users[i] = obj;
  res.status(200).send({ data: users });
});

app.listen(port, () => {
  console.log("Server is Running at 8080");
});

const users = [
  {
    id: 1495,
    email: "CYen@at.io",
    username: "ASerraon",
    password: "3AjiS"
  },
  {
    id: 1496,
    email: "RButler@risus.io",
    username: "SShofstahl",
    password: "yirfo"
  },
  {
    id: 1497,
    email: "TNuccio@dolor.com",
    username: "BDeluca",
    password: "FS5X7"
  }
];
