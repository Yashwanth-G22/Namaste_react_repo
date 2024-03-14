import styled from "styled-components";

export const StyledColumnDiv =  styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;

export const StyledRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 5px;
`;

export const SecondaryButton = styled.button`
    border: 1px solid black;
    border-radius: 10px;
`;

export const PrimaryButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 10px;
`;
