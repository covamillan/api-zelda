/* eslint-disable react-hooks/exhaustive-deps */
import { useItems } from '../../hooks/use.items';
import { ItemsRepo } from '../../services/items.repo';
import { useEffect } from 'react';
import { Card } from '../card/card';

export function Cards() {
  const repo = new ItemsRepo();
  const { items, loadItems } = useItems(repo);

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      <h1>bichos</h1>
      <ul>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
