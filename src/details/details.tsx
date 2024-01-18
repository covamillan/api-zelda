import { useParams } from 'react-router-dom';
import { useItems } from '../hooks/use.items';
import { ItemsRepo } from '../services/items.repo';
import { useEffect, useMemo } from 'react';

export default function Details() {
  const repo = useMemo(() => new ItemsRepo(), []);
  const { id } = useParams();
  const { items, loadItems } = useItems(repo);

  return <h1>details</h1>;
}
