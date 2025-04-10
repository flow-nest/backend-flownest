import { pool } from "../../config/db.config";
import RobotModel from "../models/robot.model";

// CREATE
async function createRobot(robot: RobotModel) {
  const { name, status, battery, location } = robot;

  try {
    const result = await pool.query(
      `INSERT INTO robots (name, status, battery, location) 
       VALUES ($1, $2, $3, $4) RETURNING id, name, status, battery, location`,
      [name, status, battery, location]
    );

    return new RobotModel(
      result.rows[0].id,
      result.rows[0].name,
      result.rows[0].status,
      result.rows[0].battery,
      result.rows[0].location,
      result.rows[0].last_maintained
    );
  } catch (error) {
    console.error("Error creating robot: ", error);
    throw error;
  }
}

export { createRobot };
