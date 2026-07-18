const { Pool } = require("pg");

const pool = new Pool (
    {
        host : process.env.PG_HOST || process.env.DB_HOST || "localhost",
        port : Number(process.env.PG_PORT || process.env.DB_PORT || 5432),
        user : process.env.PG_USER || process.env.DB_USER,
        password : process.env.PG_PASSWORD || process.env.DB_PASSWORD,
        database : process.env.PG_DATABASE || process.env.DB_NAME,
    }
);

const createTables = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(50) DEFAULT 'user',
            avatar TEXT,
            is_active BOOLEAN DEFAULT TRUE,
            reset_password_token TEXT,
            reset_password_expires TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log("Tables vérifiées/créées");
};

module.exports = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log("PostgreSQL connecté");
        await createTables();
    } catch (error) {
        console.error("Erreur de connexion PostgreSQL: ", error);
        process.exit(1);
    }
};

module.exports.pool = pool;
