import { pool } from "../../config/db.config";
import { PackageModel } from "../models/package.model";

// CREATE
async function createPackage(pkg: PackageModel) {
  const { qrCode, size, weight, location, status, shelf_id } = pkg;

  try {
    const result = await pool.query(
      `INSERT INTO packages (qr_code, size, weight, location, status, shelf_id) 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, qr_code, size, weight, location, status, shelf_id, created_at, updated_at`,
      [qrCode, size, weight, location, status, shelf_id]
    );

    return new PackageModel(
      result.rows[0].id,
      result.rows[0].qr_code,
      result.rows[0].size,
      result.rows[0].weight,
      result.rows[0].location,
      result.rows[0].status,
      result.rows[0].shelf_id,
      result.rows[0].created_at,
      result.rows[0].updated_at
    );
  } catch (error) {
    console.error("Error creating package: ", error);
    throw error;
  }
}

// GET ALL
async function getAllPackages() {
  try {
    const result = await pool.query(`SELECT * FROM packages`);
    return result.rows.map(
      (row) =>
        new PackageModel(
          row.id,
          row.qr_code,
          row.size,
          row.weight,
          row.location,
          row.status,
          row.shelf_id,
          row.created_at,
          row.updated_at
        )
    );
  } catch (error) {
    console.error("Error fetching packages: ", error);
    throw error;
  }
}

export { createPackage, getAllPackages };
