import React from 'react';
import './IfElse';
import IfElse from './IfElse';
export default props => {
    const usuario = props.usuario ||{}
    return (
        <div>
            <IfElse test={usuario && usuario.nome}>
                Seja bem Vindo <strong> {props.usuario.nome}</strong>!!
            </IfElse>

            <IfElse test={!usuario || !usuario.nome}>
                Seja bem Vindo <strong>Amigão</strong>!!
            </IfElse>
        </div>
    )
}