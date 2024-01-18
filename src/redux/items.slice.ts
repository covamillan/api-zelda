import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../models/item.model';

export type ItemsState = {
  items: Item[];
  itemsState: 'idle' | 'loaded' | 'error';
};

const initialState: ItemsState = {
  items: [],
  itemsState: 'idle',
};
const itemsSlice = createSlice({
  name: 'items',
  initialState: initialState,

  reducers: {
    getItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
});

export const { getItems } = itemsSlice.actions;
export default itemsSlice.reducer;
