import { useRef, useState } from 'react';
import { items } from './items';
import { RestaurantCard } from './Rescard';
import { Footer } from './footer/footer';
import { contactNo, webLink } from './constants';

export const Body = () => {
  const [newFilterItems, setNewFilterItems] = useState(items);
  const searchText = useRef();
  const handleSearch = () => {
    console.log(searchText.current.value);
  }
  console.log(searchText)
  const filterItems = () => {
    setNewFilterItems(items.filter(res => res.rating > 3.5))
  };
  return (
    <div>
      <div className="search-bar">
        <div className='search'>
          <input type="search" className='search-input' defaultValue='fruits' ref={searchText}/>
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="res-container">
        <RestaurantCard items={newFilterItems ? newFilterItems : items} />
      </div>
      <div className='con-footer'>
        <Footer contactNo={contactNo} webLink={webLink} />
      </div>
    </div>
  );
};