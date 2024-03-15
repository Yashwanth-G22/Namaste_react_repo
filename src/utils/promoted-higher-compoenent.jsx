import styled from "styled-components"

const StyledLabel = styled.label`
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 5px;
    margin: 5px;
    text-align: center;
`;

export const WithPromotedResCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <StyledLabel>promoted</StyledLabel>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
