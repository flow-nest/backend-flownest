export default class RobotModel {
  id: string;
  name: string;
  status: string;
  battery: number;
  location: string;
  last_maintained: string;

  constructor(
    id: string,
    name: string,
    status: string,
    battery: number,
    location: string,
    last_maintained: string = new Date().toISOString()
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.battery = battery;
    this.location = location;
    this.last_maintained = last_maintained;
  }

  get robotId() {
    return this.id;
  }

  set robotId(id: string) {
    this.id = id;
  }

  get robotName() {
    return this.name;
  }

  set robotName(name: string) {
    this.name = name;
  }

  get robotStatus() {
    return this.status;
  }

  set robotStatus(status: string) {
    this.status = status;
  }

  get robotBattery() {
    return this.battery;
  }

  set robotBattery(battery: number) {
    this.battery = battery;
  }

  get robotLocation() {
    return this.location;
  }

  set robotLocation(location: string) {
    this.location = location;
  }

  get robotLastMaintained() {
    return this.last_maintained;
  }
  set robotLastMaintained(last_maintained: string) {
    this.last_maintained = last_maintained;
  }
}
