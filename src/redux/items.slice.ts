import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../models/item.model';
import { getItemsAsync } from './categories.thunks';

export type ItemsState = {
  items: Item[];
  itemsState: 'idle' | 'loaded' | 'error';
};

const initialState: ItemsState = {
  items: [],
  itemsState: 'idle',
};
const itemsSlice = createSlice({
  initialState: initialState,
  name: 'items',
  reducers: {
    deleteItem: (state, action: PayloadAction<Item['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getItemsAsync.fulfilled,
      (state, { payload }: { payload: Item[] }) => {
        state.itemsState = 'loaded';
        state.items = payload;
      }
    );
    builder.addCase(getItemsAsync.pending, (state) => {
      state.itemsState = 'idle';
    });
    builder.addCase(getItemsAsync.rejected, (state) => {
      state.itemsState = 'error';
    });
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
