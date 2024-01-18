import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../models/item.model';

export type ItemsState = {
  items: Item[];
  item: Item;
  itemsState: 'idle' | 'loaded' | 'error';
};

const initialState: ItemsState = {
  items: [],
  item: {} as Item,
  itemsState: 'idle',
};
const itemsSlice = createSlice({
  name: 'items',
  initialState: initialState,

  reducers: {
    getItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    getItem(state, action: PayloadAction<Item>) {
      state.item = action.payload;
    },
  },
});

export const { getItems, getItem } = itemsSlice.actions;
export default itemsSlice.reducer;
