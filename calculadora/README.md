# Calculadora
## Requisitos mínimos:

* NodeJs 12.18.2
* Npm 6.14.5
* Yarn 1.22.4

## Configuração do ambiente
### Instalação NodeJs e Npm
#### Windows

Faça o download do Node no site https://nodejs.org/en/download/, e escolha a opção windows. Em seguida, execute como administrador e instale. Junto com o nodeJS, será instalado o NPM.
Para verificar se foi instalado corretamente, abra o terminal de comando, e digite:

``` 
node -v 

# ou 

node --version
```
Logo abaixo, deverá aparecer a versão do Node. Repita o mesmo processo para NPM, verificando se foi instalado corretamente.


``` 
npm -v 

# ou 

npm --version
```
### Linux

Para instalação do Node e NPM em linux, você poderá fazer tudo por comandos no terminal. Para isso, abra o terminal do linux, e digite o código:

```
sudo apt install nodejs
```
Em seguida você poderá fazer a instalação do npm, digitando o seguindo código no seu terminal:

```
sudo apt install npm
```
Depois é so confirmar se tudo foi instalado corretamente conferindo a versão instalada de cada um.

**Para verficar a versão do node:**

``` 
node -v 

# ou 

node --version
```

**Para verficar a versão do npm**

``` 
npm -v 

# ou 

npm --version
```

## Instalação do yarn

Para instalação do yarn, basta entrar no site https://yarnpkg.com/, e efetuar o download e a instalação do yarn.

O yarn, é um tipo de npm um pouco mais veloz criado pelo facebook, ele também permite a gente instalar pacotes de outros usuários e outros desenvolvedores de uma forma mais facil.

Você pode instalar o yarn também pelo terminal, apenas digitando:

```
npm install -g yarn
```
E conferindo sua versão através de:
```
yarn -v

#ou

yarn --version
```

## Começando o projeto App calculadora:

Iremos utilizar o terminal para dar inicio ao projeto, digitando o código abaixo:

O react utiliza as versões mais novas do ECMAScript, porem como essas versões não são reconhecidas por todos os browsers, precisamos converter algumas parte do código para versões mais antigas para que assim todos os navegadores entendam a programação que estamos fazendo. Para fazer essa configuração, utilize o código abaixo:
```
npm install -g create-react-app
```

Agora sim, vamos criar o app calculadora, utilizando a seguinte instrução:
```
create-react-app calculadora
```
### Component Calculator:

Para formato da culadora, criamos uma pasta chamada main dentro da pasta src, com um arquivo .js, chamado de Calculator.js, e um arquivo css, chamado de Calculator.css.

No arquivo Calculator.js, iremo fazer o import do react, e do nosso arquivo css, utilizando a instrução import.
```JS
import React, {Component} from 'react';
import './Calculator.css';
```
Logo após fazer o import do react, e da estilização, é preciso criar uma class que terá uma função render, com um retorno de uma expressão para que dentro dela, seja possivel colocar o jsx. 
Esse retorno nada mais é do que uma div com uma className para aplicação do css, e dentro dessa div colocar os outros components que iremos criar mais ao longo do projeto.

```JS
class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                components que ainda serão criados
            </div>
        )
    }
}
```

### Estilização, dando um formato a calculadora:

Para dar um formato a calculadora, no arquivo css que criamos, vamos utilizar a classe .calculator e utilizar a seguinte configuração:
```css

.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px     48px;
}
```
Estamos colocando escolhendo o display:grid, para dividir a nossa div em colunas. Utilizando grid-template-columns, estamos dividindo a div em quatro colunas, com 25% de tamanho cada coluna.

Para dividir as linhas, estamos colocando o grid-template-rows, dividindo a linha em cinco partes com 48px cada linha, e com um fragmento apenas para o display.

Fora da pasta src, iremos utilizar o arquivo index.css, para dar uma estilização global. Utilizamos o display flex para alinhar tudo ao centro da página com as seguintes fontes, cores e background.

Obs.: Fique a vontade para escolher fontes, cores e backgrounds que mais lhe agradar.
```css
body {
  background-color: #282a36;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}
```
Para visualizarmos o resultado do que criamos no browser, no arquivo index.js, vamos trocar o import de app.js para o arquivo .js que criamos na pasta main, e abrir

```JS
import Calculator from './main/Calculator';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
```

Em seguida, no terminal, vamos utilizar uma instrução para carregar o que criamos no browser.
```
npm start

#ou

yarn start
```

### Component Display

Nesta parte vamos criar o display da calculadora.

Antes de mais nada, dentro da pasta src, vamos criar uma pasta chamada de components. Nesta pasta é onde irá se encontrar todos os componentes da calculadora.

Após criar a pasta components, abra essa pasta e dentro dela, criaremos uma pasta para nosso componente display, e dentro dela, os arquivos Display.css e Display.js.

Como de costume, no arquivo Display.js importaremos o react. Dessa vez, como não iremos utilizar uma class, e sim uma função, o import irá ficar da seguinte forma:

```JS
import React from 'react';
```

Importe também o arquivo css do display:
```JS
import './Display.css';
```

Logo abaixo, criamos uma constante chamada displayLed, que terá props como parâmetro. Esse componente funcional, terá o formato de uma arrow function, e terá o retorno de uma propriedade chamada value (valor), que é exatamente o que será exibido no display da nossa calculadora. Então:

```JS
const displayLed = (props) => {
    return (
        <div className="display">
            {props.value}
        </div>
    );
};

export default displayLed;
```

Em Display.css, faremos a costumização do nosso display utilizando a class que atribuimos para a div, que é .display.

No css, utilizamos grid-column, que diz quantas colunas da grid irá ocupar. Como o display é a calculadora inteira, e ja dividimos a div em quatro colunas, utilizamos span 4.

Também colocamos um display flex, para alinhar o que está escrito no display no final da calculadora, e align-items para alinhar no centro do display.

```css
.display {
    grid-column: span 4;
    background-color: #44475a;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    font-size: 2em;
    color: #ff5555;
}
```
Feito isso, vamos importar o display no nosso component Calculator, localizado na pasta main:

```JS
import Display from '../components/Display/Display';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display />
            </div>
        )
    }
}
```
Para testar o resultado no browser, pode-se atribuir um valor alternativo no display, apenas para fins de testes:
```JS
<Display value={100} />
```

### Component Button

Vamos seguir os mesmos passos da criação do display, para a criação dos botões. Então, dentro da pasta components, criamos uma nova pasta com o nome do component a ser criado, que no nosso caso seria a pasta Button, e também os dois componentes: Button.css e Button.js

Como de costume, vamos importar o react e arquivo Button.css dentro do arquivo Button.js:

```JS
import React from 'react';
import './Button.css';
```

Agora, temos a criação de constante, no formato de arrow function chamada calculatorButton, que terá props como parametro. Essa função irá retornar um button que será label como propriedade. 

Antes do return, vamos criar uma variavel classes que receberá 'button ', e acrescentar as classes a partir dessa variavel para estilização. Então:

```JS
const calculatorButton = (props) => {

    let classes = 'button ';

    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    return (
        <button
        className={classes}> 
            {props.label} 
        </button>
    );
};

export default calculatorButton;
```

Para estilização dos botões da calculadora, podemos tirar as bordas dos botões e colocar apenas as bordas da direita e a inferior.

```css
.button {
    font-size: 1.4em;
    background-color: #f8f8f2;
    border: none;
    border-right: solid 1px #44475a;
    border-bottom: solid 1px #44475a;
    outline: none;
}
```

Vamos também colocar um efeito para quando clicar no botão da calculadora, ele fique mais escuro. Então:

```css
.button:active {
    background-color: #f8f8f2e7
}
```

Também vamos criar uma classe para definir quando um botão ocupa duas colunas na calculadora.

```css
.button.doouble {
    grid-column: span 2;
}
```

Para diferenciar os botões de operação, podemos colocar uma cor de fundo diferente para eles, então, podemos criar uma classe chamada .operation e definir uma background diferente para esses botões:

```css
.button.operantio {
    background-color: #6272a4;
    color: #50fa7b;
}

.button.button.operation:active {
    background-color: #6273a4de;
}
```

#### Retornando os valores ao clicar no botão

Utlizamos o evento onClick, que dispara uma arrow function recebendo o evento, e irá chamar o props.click. Ou seja, esperamos receber uma propriedade chamada click onde seu conteudo é uma função que será chamada. A propriedade click vai receber props.label, onde o conteudo do elemento será passado para a função click. Então:

```JS
return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}> 
            {props.label} 
        </button>
    );
```
### Adicionando os digitos a calculadora

Voltamos ao arquivo Calculator.js, e importamos nosso componente Button.js:

```JS
import Button from '../components/Button/Button';
```

Para adicionar os botões, vamos retornar várias vezes o Button.js, e atribuir o seu label como o conteudo de cada botão. Então, vamos adicionar:

```JS
<Button label="AC"/>
<Button label="/"/>
<Button label="7"/>
<Button label="8"/>
<Button label="9"/>
<Button label="*"/>
<Button label="4"/>
<Button label="5"/>
<Button label="6"/>
<Button label="-"/>
<Button label="1">
<Button label="2">
<Button label="3">
<Button label="+">
<Button label="0">
<Button label=".">
<Button label="=">
```

A seguir, vamos criar as função de cada botão. São as funções addDigit() para adicionar um digito, setOperation() para adicionar uma operação, e clearMemory(), para limpar a memória da calculadora.

Então:

```JS
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
```

Dentro de render(), vamos criar uma constante chamada addDigit, que será uma arrow function. Essa arrow function irá receber um x que irá chamar a função addDigit:

```JS
const addDigit = x => this.addDigit(x)
```

Vamor fazer a mesma coisa com setOperation, porem, recebendo op, de operation:

```JS
const setOperation = op => this.setOperation(op)
```

Como chamamos clearMemory uma unica vez, que é no botão AC, podemos chamar essa função direto no botão AC. Então:

```JS
<Button label="AC" click={ () => this.clearMemory()} />
```

### Implementando o estado inicial da calculadora com clearMemory()

Fora da class Calculator, vamos criar uma const chama initialState. Dentro de initialState, vamos colocar um displayValue, que irá retornar a string '0', para que toda vez que clicar em no botão AC, volte ao valor inicial que é zero.

Vamos criar também, uma propriedade que irá dizer se precisa ou não limpar o display, onde inicialmente começa com false. Então, clearDisplay: false.

Também vamos criar a variavel que irá armezanar a operação, que será operation: null.

Também tera o value, que é o valor. O value será um array com dois valores.

Por fim, terá o ultimo parametro, que diz se estamos manipulando o valor de indice zero do array, ou valor de indice 1. Essa propriedade é o current: 0.

```JS
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
```

A seguir, dentro da class Calculator, vamos colocar um state, que recebe o operador spread recebendo initialState.

```JavaScript
state = {...initialState}
```

Após isso, vamos criar a função clearMemory(), para que volte ao estado inicial.

```JS
clearMemory() {
    this.setState({...initialState});
} 
```
O próximo passo, é fazer com que o display da calculadora aponte para o valor do estado, então em Display.js, vamos colocar dentro de value , this.state.displayValue:

```JS
 <Display value={this.state.displayValue} />
```
### Função addDigit()

Antes do render, vamos criar a função addDigit(x). A função addDigit, terá um if que irá dizer:

Se receber um digito que é um ponto (.), e o valor do display ja contem um ponto, significa que não pode adicionar um segundo ponto, pois não existe número com mais de um ponto.

```JS
addDigit (x) {
    if (x === '.' && this.state.displayValue.includes('.')) {
        return
    }
}
```

Continuando a criação da função, vamos colocar a constante clearDisplay que terá dois cenários.

O primeiro cenário é quando o display contem apenaso digito zero. Nesse caso, nós limpamos o display quando ele contem apenas o digito zero.

O segundo cenário é se caso o clearDisplay for marcado como true.

Isso irá evitar muitos zeros a esquerda. Por exemplo, o resultado da soma 0001 + 0002 é o mesmo que 1 + 2, que é igual a 3.

```JS
const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
```

Próximo passo é criar uma variavel para que quando o clearDisplay for true, receberá um valor vazio, caso contrário, receba this.state.displayValue.

```JS
const currentValue = clearDisplay ? '' : this.state.displayValue
```

A seguir, criamos mais uma constante para mudar o valor do display, que será currentValue + x.

Para mudar o estado da nossa aplicação, temos que chamar this.setState.

```JS
const displayValue = currentValue + x;
    this.setState({displayValue, clearDisplay: false});
```

O próximo passo agora, é dizer que sempre quando for digitado um número, esse número deve ser armazenado no array que criamos. 

Então, se for digitado um valor diferente de ponto, entre no array.

```JS
if (x !== '.') {
    const i = this.state.current;
    const newValue = parseFloat(displayValue);
    const values = [...this.state.values];
    values[i] = newValue;
    this.setState ({values});
    console.log(values);
}
```

### Função setOperation

Nessa função, vamos implementar a lógica das operações matemáticas. para isso, vamos criar a função setOperation, que receberá como parametro (operation).

Nessa função, vamos mudar o current pra 1, ou seja, precisamos começar a manipular o indice [1] do array, para mexer no segundo valor. 

Além disso, precisamos que quando for citada uma operação, o próximo numero que digitar, o display também precisa ser limpo.

```JS
setOperation(operation) {
    if (this.state.current === 0) {
        this.setState({operation, current: 1, clearDisplay: true})
    }
}
```

Agora, vamos passar para a lógica de concluir a operação, para quando o current não mais de indice [0] e sim indice [1].

Então, caso o current não for [0] e sim [1], significa que temos uma operação, então criamos uma constante chamada de equals que recebe a operação que seje o '='.

```JS
else {
    const equals = operation === '=';
    const currentOperation = this.state.operation;
}
```

Agora vamos fazer a operação matemática. Para isso, primeiro fazemos um clone de currentOperation e depois utilizamos a função eval.

A função eval, pega o primeiro valor no indice [0], usa o currentOperantion para a operação, então a operação tiver na currentOperation, ele irá usar para operação e coloca o segundo valor no indice [1].

```JS
else {
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
}
```
Agora temos que mudar o estado do display utilizando this.setState.

O displayValue recerá o valor do indice [0], pois o resultado é armazenado nesse indice para que ele seja exibido.

A operação, se for um equals ele recebe a operação como nula, porque a operação ja foi concluida, e se for outra operação recebe operation novamente.

Caso o usuário digite coloque equals, a corrente irá continuar com o indice [0], caso tenha colocado qualquer outra operação, mexe no indice [1].

O display será limpo caso penas se o usuário não clicar em equals, e também é necessário passar os valores para que seja substituido no estado

```JS
this.setState ({
    displayValue: values[0],
    operation: equals ? null : operation, 
    current: equals ? 0 : 1,
    clearDisplay: !equals,
    values
})
```