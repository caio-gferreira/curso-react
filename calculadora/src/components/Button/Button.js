import React from 'react';
import './Button.css';

const calculatorButton = (props) => {
    return (
        <button className="button"> {props.label} </button>
    );
};

export default calculatorButton;