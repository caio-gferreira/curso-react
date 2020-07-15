
import React, { Component } from 'react';
//Estilização
import './styles.css';
import './App.css';

//Arquivos
import Contador from './components/Desafio/Contador/Contador';
import Header from './components/layout/Header/Header';
import Card from './components/layout/Card/Card';
import Aleatorio from './components/Desafio/Aleatorio/Aleatorio';
import Repeticao from './components/Desafio/Repeticao/Repeticao';
import RepeticaoProduto from './components/Desafio/Repeticao/RepeticaoProduto';
import ParOuImpar from './components/Desafio/Condicional/ParOuImparTernario';
import UsuarioInfo from './components/Desafio/Condicional/UsuarioInfo';
import DiretaPai from './components/Desafio/Comunicacao/Direta/DiretaPai';
import IndiretaPai from './components/Desafio/Comunicacao/Indireta/IndiretaPai';
import Mega from './components/Desafio/Mega/Mega';


const App = () => (
  <div className="App">
    
      <Header />

      <div className="cards">

        <Card titulo="#01 - Desafio Aleatório">
          <Aleatorio min={1} max={10} />
          <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#02 - Repetição">
          <Repeticao />
        </Card>

        <Card titulo="#03 - Tabela de Preços (Repetição)">
          <RepeticaoProduto />
        </Card>

        <Card titulo="#04 - Par Ou Impar">
          <ParOuImpar number={20}/>
        </Card>

        <Card titulo="#05 - Seja Bem Vindo">
          <UsuarioInfo usuario= {{nome: 'Caio'}} />
          <UsuarioInfo usuario= {{email: 'caio@.com'}} />
          <UsuarioInfo usuario/>
        </Card>

        <Card titulo="#06 - Comunicação Direta">
          <DiretaPai />
        </Card>

        <Card titulo="#07 - Comunicação Indireta">
          <IndiretaPai />
        </Card>

        <Card titulo="#08 - Contador">
          <Contador numeroInicial={50}/>
        </Card>

        <Card titulo="#09 - MegaSena">
          <Mega />
        </Card>
        
      </div>
    </div>
  
)

export default App;