// importer les extensions
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middlewares
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// importer les routes

const authRoutes = require("./src/routes/auth.route");
const userRoutes = require("./src/routes/user.route");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "API Opérationnelle !"
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Une erreur interne est survenue." });
});

module.exports = app;
