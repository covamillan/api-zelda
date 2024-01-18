import { Link } from 'react-router-dom';
import { Item } from '../../models/item.model';

export function Card({ item }: { item: Item }) {
  return (
    <>
      <h3>{item.id}</h3>
      <h3>{item.category}</h3>{' '}
      <Link to={`/details/${item.id}`}>
        <h4>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h4>
      </Link>
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
