import { items } from './items';
import styled from 'styled-components';
import { useRef, useState, useCallback } from 'react';
import { RestaurantCard } from './Rescard';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { StyledColumnDiv, SecondaryButton } from '../utils/common-styles'

const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 5px;
`;

const InputElement = styled.input``;

const ResContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
`;

export const Body = () => {
  const [newFilterItems, setNewFilterItems] = useState(items);
  const searchText = useRef();
  const { onlineStatus } = useOnlineStatus();

  const handleSearch = () => {
    const text = searchText.current.value;
    setNewFilterItems(items.filter((elem) =>
      elem.foodName.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      elem.resName.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    );
  }
  const renderBody = useCallback(() => {
    return !onlineStatus ? <h1>U r in offline Mode!! plz check ur internet connection</h1> : (
      <BodyWrapper>
        <StyledColumnDiv>
          <div>
            <InputElement type="search" className='search-input' ref={searchText} />
            <SecondaryButton onClick={handleSearch}>Search</SecondaryButton>
          </div>
        </StyledColumnDiv>
        <ResContainer>
          <RestaurantCard items={newFilterItems ? newFilterItems : items} />
        </ResContainer>
      </BodyWrapper>
    )
  }, [onlineStatus]);

  return renderBody();
};