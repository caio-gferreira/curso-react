import React from 'react';

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial
    };

    inc = () => {
        this.setState({
            numero: this.state.numero +this.state.passo,
        });
    }

    dec = () => {
        this.setState ({
            numero: this.state.numero -this.state.passo,
        });
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        })
    }



    render () {
        return (
            <div>
                <h2>Contador</h2>
                <h3>
                    {this.state.numero}
                </h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button className="btn btn-outline-light mr-2 mt-4" onClick={this.inc} >+</button>
                <button className="btn btn-outline-light mt-4" onClick={this.dec} >-</button>
            </div>
        );
    }
}