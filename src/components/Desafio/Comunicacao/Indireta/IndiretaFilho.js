import React from 'react';

const Filho = (props) => {

    return(
        <div>
            <div>Filho</div>
            <button className="btn btn-outline-light" onClick={
                function () {
                   props.quandoClicar('Carlos', 57, true)
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
};

export default Filho;