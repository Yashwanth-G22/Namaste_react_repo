import { items } from './items';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { RestaurantCard } from './Rescard';

const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 5px;
`;
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
    <BodyWrapper>
      <div className="search-bar">
        <div className='search'>
          <input type="search" className='search-input' ref={searchText} />
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="res-container">
        <RestaurantCard items={newFilterItems ? newFilterItems : items} />
      </div>
    </BodyWrapper>
  );
};