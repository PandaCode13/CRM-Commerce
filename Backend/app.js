const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/user.route");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "API opérationnelle" }));
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Une erreur interne est survenue." });
});

module.exports = app;
