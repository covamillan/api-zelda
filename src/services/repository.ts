export interface Repository<X> {
  getAll(): Promise<X[]>;
  getById(id: string): Promise<X>;
}
