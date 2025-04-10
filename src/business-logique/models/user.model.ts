export default class UserModel {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    username: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get displayUsername() {
    return this.username;
  }

  set displayUsername(name: string) {
    this.username = name;
  }
}

export { UserModel };
