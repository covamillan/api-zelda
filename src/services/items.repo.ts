import axios from 'axios';
import { API_URL } from '../config';
import { Item } from '../models/item.model';
import { Repository } from './repository';

export class ItemsRepo implements Repository<Item> {
  url: string;
  constructor() {
    this.url = API_URL;
  }

  async getAll(): Promise<Item[]> {
    const url = this.url;
    const {
      data: { data },
    } = await axios.get(url);

    if (!data) {
      throw new Error('Error fetching data');
    }

    return data;
  }
}
