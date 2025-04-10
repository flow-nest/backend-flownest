import { pool } from "../../config/db.config";
import { TaskModel } from "../models/task.model";

// CREATE
async function createTask(task: TaskModel) {
  const { package_id, robot_id, status } = task;

  try {
    const result = await pool.query(
      `INSERT INTO tasks (package_id, robot_id, status) 
         VALUES ($1, $2, $3) RETURNING id, package_id, robot_id, status, created_at, updated_at`,
      [package_id, robot_id, status]
    );

    return new TaskModel(
      result.rows[0].id,
      result.rows[0].package_id,
      result.rows[0].robot_id,
      result.rows[0].status,
      result.rows[0].created_at,
      result.rows[0].updated_at,
      result.rows[0].completed_at
    );
  } catch (error) {
    console.error("Error creating task: ", error);
    throw error;
  }
}

// READ ALL
async function getAllTasks() {
  try {
    const result = await pool.query(`SELECT * FROM tasks`);
    return result.rows.map(
      (row) =>
        new TaskModel(
          row.id,
          row.package_id,
          row.robot_id,
          row.status,
          row.created_at,
          row.updated_at,
          row.completed_at
        )
    );
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    throw error;
  }
}

export { createTask, getAllTasks };
