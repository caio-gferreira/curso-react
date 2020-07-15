/* Gerando um valor aleatório entre dois números inteiros,
utilizando Math.random (), retornando */
import React from 'react';

const Aleatorio = (props) => {
    //Lendo atributos dentro de um objeto com destruturing
    const max = props.max;
    const min = props.min;

    //Lógica, Algoritmo
    const valorAleatorio = parseInt (
        Math.random () * (max - min) + min
    )

    //Retornando
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> 
                {min}
            </p>

            <p>
                <strong>Valor Máximo: </strong>
                {max}
            </p>

            <p>
                <strong>Valor Escolhido: </strong>
                {valorAleatorio}
            </p>
        </div>
    )
}

export default Aleatorio;
