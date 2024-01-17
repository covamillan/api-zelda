import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemsRepo } from '../services/items.repo';

export const getItemsAsync = createAsyncThunk<[], { repo: ItemsRepo }>(
  'items/load',
  async ({ repo }) => {
    const items = await repo.getAll();
    return items;
  }
);
