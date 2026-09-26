const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.route");
const userRoutes = require("./src/routes/user.route");
const notFound = require("./src/middlewares/notFound.middleware");
const errorHandler = require("./src/middlewares/error.middleware");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "API opérationnelle" }));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;