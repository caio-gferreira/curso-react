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












