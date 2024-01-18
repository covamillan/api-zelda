import { useParams } from 'react-router-dom';
import { useItems } from '../../hooks/use.items';
import { ItemsRepo } from '../../services/items.repo';
import { useEffect, useMemo } from 'react';

export default function Details() {
  const repo = useMemo(() => new ItemsRepo(), []);
  const { id } = useParams();
  const { item, loadItem } = useItems(repo);

  useEffect(() => {
    loadItem(id!);
  }, []);

  return (
    <>
      <h1>details</h1>
      <h3>{item.name}</h3>
      <h3>{item.category}</h3>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <h2>{item?.cooking_effect}</h2>
      <h2>{item?.hearts_recovered}</h2>
      <h2>{item?.drops}</h2>
      <h2>{item?.properties?.attack}</h2>
      <h2>{item?.properties?.defense}</h2>
    </>
  );
}
