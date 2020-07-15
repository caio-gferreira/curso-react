import React from 'react';
import Produtos from '../../../data/Produtos';
import './Repeticao.css';

const Catalago = () => {
    
    const  tabelaProduto = Produtos.map(product => {
        return (
            <tr>

                <td key={product.id}>
                    {product.id}
                </td>

                <td>
                    {product.name}
                </td>

                <td>
                   R$ {product.price},00
                </td>
            </tr>
        )
    });

    return (
        <div>
            <table className="table table-striped table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {tabelaProduto}
                </tbody>
            </table>
        </div>
    );
};

export default Catalago;