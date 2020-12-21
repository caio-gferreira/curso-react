import React from 'react';
import './App.css';
//Components
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';


const App = props => (
    <div className="App">
        <Menu />
        <Content />
    </div>
)

export default App;