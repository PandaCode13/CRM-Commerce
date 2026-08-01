const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

async function connectDatabase() {
  try {
    await pool.query("SELECT NOW()");

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,

        role VARCHAR(20) NOT NULL DEFAULT 'user'
          CHECK (role IN ('user', 'admin')),

        is_active BOOLEAN NOT NULL DEFAULT TRUE,

        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    // Compatibilite avec la premiere version du schema, qui utilisait
    // "firstname" et "lastname" au lieu des noms snake_case du modele.
    await pool.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'firstname'
        ) AND NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'first_name'
        ) THEN
          ALTER TABLE users RENAME COLUMN firstname TO first_name;
        END IF;

        IF EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'lastname'
        ) AND NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'last_name'
        ) THEN
          ALTER TABLE users RENAME COLUMN lastname TO last_name;
        END IF;
      END $$;
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
        status VARCHAR(20) NOT NULL DEFAULT 'regular'
          CHECK (status IN ('regular', 'silver', 'gold', 'vip', 'enterprise')),
        company_name VARCHAR(150),
        phone VARCHAR(30),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    // Migration des anciennes donnees : type_client devient clients.status.
    await pool.query(`
      DO $$
      BEGIN
        IF EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'type_client'
        ) THEN
          INSERT INTO clients (user_id, status)
          SELECT id, type_client FROM users
          WHERE role = 'user'
          ON CONFLICT (user_id) DO UPDATE SET status = EXCLUDED.status;

          ALTER TABLE users DROP COLUMN type_client;
        END IF;
      END $$;
    `);

    console.log("✅ Base de données connectée.");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
    throw error;
  }
}

module.exports = connectDatabase;
module.exports.pool = pool;
