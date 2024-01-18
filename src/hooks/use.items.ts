import { useCallback } from 'react';
import { ItemsRepo } from '../services/items.repo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getItem, getItems } from '../redux/items.slice';

export function useItems(repo: ItemsRepo) {
  const { items, itemsState, item } = useSelector(
    (state: RootState) => state.items
  );
  const itemsDispatch = useDispatch<AppDispatch>();

  const loadItems = useCallback(async () => {
    try {
      const data = await repo.getAll();
      itemsDispatch(getItems(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [itemsDispatch, repo]);

  const loadItem = useCallback(
    async (id: string) => {
      try {
        const data = await repo.getById(id);
        itemsDispatch(getItem(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    },
    [itemsDispatch, repo]
  );

  return {
    item,
    items,
    itemsState,
    loadItems,
    loadItem,
  };
}
