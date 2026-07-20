require("dotenv").config();

const app = require("./app");
const connectDatabase = require("./src/config/db");

const port = process.env.PORT || 5000;

async function start() {
  try {
    await connectDatabase();
    app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
  } catch (error) {
    console.error("Impossible de démarrer le serveur :", error);
    process.exit(1);
  }
}

start();
