import React from 'react';
import alunos from '../../../data/Alunos';
import './Repeticao.css';

const Repeticao = () => {
    
    const alunosList = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) <strong>{aluno.nome}: </strong>  {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <h2>Notas de Alunos</h2>
            <ul>
                {alunosList}
            </ul>
        </div>
    );
};

export default Repeticao;