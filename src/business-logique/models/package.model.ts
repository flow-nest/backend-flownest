export default class PackageModel {
  id: string;
  qrCode: string;
  size: number;
  weight: number;
  location: string;
  status: string;
  shelf_id: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: string,
    qrCode: string,
    size: number,
    weight: number,
    location: string,
    status: string,
    shelf_id: string,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.qrCode = qrCode;
    this.size = size;
    this.weight = weight;
    this.location = location;
    this.status = status;
    this.shelf_id = shelf_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getQrCode(): string {
    return this.qrCode;
  }

  setQrCode(qrCode: string): void {
    this.qrCode = qrCode;
  }

  getSize(): number {
    return this.size;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: string): void {
    this.status = status;
  }

  getShelfId(): string {
    return this.shelf_id;
  }

  setShelfId(shelf_id: string): void {
    this.shelf_id = shelf_id;
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

export { PackageModel };