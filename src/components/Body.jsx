import { useRef, useState } from 'react';
import { items } from './items';
import { RestaurantCard } from './Rescard';
import { Footer } from './footer/footer';
import { contactNo, webLink } from './constants';

export const Body = () => {
  const [newFilterItems, setNewFilterItems] = useState(items);
  const searchText = useRef();

  const handleSearch = () => {
    const text = searchText.current.value;
    setNewFilterItems(items.filter((elem) =>
      elem.foodName.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      elem.resName.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    );
  }

  return (
    <div>
      <div className="search-bar">
        <div className='search'>
          <input type="search" className='search-input' ref={searchText} />
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