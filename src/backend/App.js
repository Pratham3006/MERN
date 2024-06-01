const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connection");
const creds = require("../backend/models/loginreqs");

// Use the CORS middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow only your React app to access the server
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.post("/data", async (req, res) => {
  try {
    const users = new creds(req.body);
    users.save().then(() => {
      res.send(users);
    }).catch((err) => {
      res.send(err);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/", (req, res) => {
  res.send("Hey there");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
