import React from "react";

export const Button = (props) => {
    const { buttonName } = props;
    return (<button id="button">{buttonName}</button>)
};