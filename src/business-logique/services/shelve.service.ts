import { create } from "domain";
import { pool } from "../../config/db.config";
import { ShelveModel } from "../models/shelve.model";

// CREATE
async function createShelve(shelve: ShelveModel) {
  const { location, capacity, currentLoad, accessibility } = shelve;

  try {
    const result = await pool.query(
      `INSERT INTO shelves (location, capacity, current_load, accessibility) 
       VALUES ($1, $2, $3, $4) RETURNING id, location, capacity, current_load, accessibility`,
      [location, capacity, currentLoad, accessibility]
    );

    return new ShelveModel(
      result.rows[0].id,
      result.rows[0].location,
      result.rows[0].capacity,
      result.rows[0].currentLoad,
      result.rows[0].accessibility
    );
  } catch (error) {
    console.error("Error creating shelve: ", error);
    throw error;
  }
}

// GET ALL
async function getAllShelves() {
  try {
    const result = await pool.query(`SELECT * FROM shelves`);

    return result.rows.map(
      (shelve) =>
        new ShelveModel(
          shelve.id,
          shelve.location,
          shelve.capacity,
          shelve.currentLoad,
          shelve.accessibility
        )
    );
  } catch (error) {
    console.error("Error fetching shelves: ", error);
    throw error;
  }
}

export { createShelve, getAllShelves };
