import React from 'react';

const Filho = (props) => (
    <div>
        <p>
            O <strong>{props.nome}</strong>, possui <strong>{props.idade}</strong> anos de idade.
            Ele <strong>{props.nerd ? 'é um filho Nerd' : 'não é um filho Nerd'}!</strong>
        </p>
    </div>
    
)

export default Filho;