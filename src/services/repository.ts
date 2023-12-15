export interface Repository<X extends { id: number }> {
  getAll(): Promise<X[]>;
}
