import Pool from "pg-pool";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  port: Number(process.env.DB_PORT) || 5432,
});
