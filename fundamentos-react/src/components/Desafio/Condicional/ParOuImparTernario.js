import React from 'react';

const ParOuImpar = (props) => {

    const isPar = props.number % 2 === 0;

    return (
        <div>
            { isPar ? <p><strong>PAR</strong></p> : <p><strong>IMPAR</strong></p>}
        </div>
    );
};

export default ParOuImpar;