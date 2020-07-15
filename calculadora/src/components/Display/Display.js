import React from 'react';
import './Display.css';

const displayLed = (props) => {
    return (
        <div className="display">
            {props.value}
        </div>
    );
};

export default displayLed;