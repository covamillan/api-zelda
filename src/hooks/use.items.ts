import { useCallback, useMemo } from 'react';

import { ItemsRepo } from '../services/items.repo';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getItems } from '../redux/items.slice';

export function useItems(repo: ItemsRepo) {
  const ItemsRepo = useMemo(() => new ItemsRepo(), []);

  const { items, itemsState } = useSelector((state: RootState) => state.items);
  const itemsDispatch = useDispatch<AppDispatch>();

  const loadItems = useCallback(async () => {
    try {
      const data = await repo.getAll();
      itemsDispatch(getItems(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [itemsDispatch, repo]);

  return {
    items,
    itemsState,
    loadItems,
  };
}
