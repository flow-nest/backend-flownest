export default class TaskModel {
  id: string;
  package_id: string;
  robot_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  completed_at: string;

  constructor(
    id: string,
    package_id: string,
    robot_id: string,
    status: string,
    created_at: string,
    updated_at: string,
    completed_at: string
  ) {
    this.id = id;
    this.package_id = package_id;
    this.robot_id = robot_id;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.completed_at = completed_at;
  }

  get taskId() {
    return this.id;
  }

  set taskId(id: string) {
    this.id = id;
  }

  get taskPackageId() {
    return this.package_id;
  }

  set taskPackageId(package_id: string) {
    this.package_id = package_id;
  }

  get taskRobotId() {
    return this.robot_id;
  }

  set taskRobotId(robot_id: string) {
    this.robot_id = robot_id;
  }

  get taskStatus() {
    return this.status;
  }

  set taskStatus(status: string) {
    this.status = status;
  }

  get taskCreatedAt() {
    return this.created_at;
  }

  set taskCreatedAt(created_at: string) {
    this.created_at = created_at;
  }

  get taskUpdatedAt() {
    return this.updated_at;
  }

  set taskUpdatedAt(updated_at: string) {
    this.updated_at = updated_at;
  }

  get taskCompletedAt() {
    return this.completed_at;
  }

  set taskCompletedAt(completed_at: string) {
    this.completed_at = completed_at;
  }
}

export { TaskModel };
