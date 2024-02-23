import { items } from './items';
import {RestaurantCard} from './Rescard';

export const Body = () => {
    return (
      <div>
        <div className="search-bar">Search</div>
        <div className="res-container">
          <RestaurantCard items={items} />
        </div>
      </div>
    );
  };