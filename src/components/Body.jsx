import { useState } from 'react';
import { items } from './items';
import { RestaurantCard } from './Rescard';

export const Body = () => {
  const [newFilterItems, setNewFilterItems] = useState();
  const filterItems = () => {
    setNewFilterItems(items.filter(res => res.rating > 3.5))
  };
  return (
    <div>
      <div className="search-bar">
        <button onClick={filterItems}>Filter res</button>
      </div>
      <div className="res-container">
        <RestaurantCard items={newFilterItems ? newFilterItems : items} />
      </div>
    </div>
  );
};