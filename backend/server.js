require("dotenv").config();

const express = require("express");
const dbConnect = require("./config/database");
const studentRoutes = require("./routes/router");

const app = express();

var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.use("/api/v1", studentRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`The Server is running at PORT: ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1> Backend is Running and this is '/' Route </h1>`);
});