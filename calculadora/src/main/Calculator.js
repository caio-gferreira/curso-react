import React, { Component } from 'react';
import './Calculator.css';
//Importing the components
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

//Lógica

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {

    state = {...initialState}
     //limpando a memoria, voltando ao estado inicial que é zero
    clearMemory() {
        this.setState({...initialState});
    } 
    
    //Efetuando as operações
    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];

            try {
                values[0] = eval (`${values[0]} ${currentOperation} ${values [1]}`);
            } 
            
            catch(e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;

            this.setState ({
                displayValue: values[0],
                operation: equals ? null : operation, 
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    //Adicionando os digitos no display, sendo lidos como indices de um Array
    addDigit(x) {
        if ( x === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + x;
        this.setState({displayValue, clearDisplay: false});

        if (x !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState ({values});
            console.log(values);
        }
    }

    render() {

        const addDigit = x => this.addDigit(x)
        const setOperation = op => this.setOperation(op)
        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={ () => this.clearMemory()} triple />
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}

export default Calculator;