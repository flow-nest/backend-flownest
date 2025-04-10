export default class ShelveModel {
  id: string;
  location: string;
  capacity: number;
  currentLoad: number;
  accessibility: Boolean;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: string,
    location: string,
    capacity: number,
    currentLoad: number,
    accessibility: Boolean,
    created_at: Date = new Date(),
    updated_at: Date = new Date()
  ) {
    this.id = id;
    this.location = location;
    this.capacity = capacity;
    this.currentLoad = currentLoad;
    this.accessibility = accessibility;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  getCapacity(): number {
    return this.capacity;
  }

  setCapacity(capacity: number): void {
    this.capacity = capacity;
  }

  getCurrentLoad(): number {
    return this.currentLoad;
  }

  setCurrentLoad(current_load: number) {
    this.currentLoad = current_load;
  }

  getAccessibility(): Boolean {
    return this.accessibility;
  }

  setAccessibility(accessibility: Boolean): void {
    this.accessibility = accessibility;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  setCreatedAt(created_at: Date): void {
    this.created_at = created_at;
  }

  getUpdatedAt(): Date {
    return this.updated_at;
  }

  setUpdatedAt(updated_at: Date): void {
    this.updated_at = updated_at;
  }
}

export { ShelveModel };
