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
    const categories = [
      'creatures',
      'equipment',
      'materials',
      'monsters',
      'treasure',
    ];

    const allData: Item[] = await Promise.all(
      categories.map(async (category) => {
        const url = this.url + category;

        const {
          data: { data },
        } = await axios.get(url);

        if (!data) {
          throw new Error('Error fetching data');
        }

        return data;
      })
    );

    const flattenedData = allData.flat();
    return flattenedData;
  }

  async getById(id: string): Promise<Item> {
    const url =
      'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/' + id;

    const {
      data: { data },
    } = await axios.get(url);

    if (!data) {
      throw new Error('Error fetching data');
    }

    return data;
  }
}
