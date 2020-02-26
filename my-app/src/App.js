import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Element1 from './components/element1'  // 引入组件
import Clock from './components/clock'
import WebSite from './components/webSite'
import Toggle from './components/toggle'
import Popper from './components/popper'
import LoginControl from './components/loginControl'
import NumberList from './components/numberList'
import ComAPIController from './components/comAPI'
import LifeCycle from './components/lifeCycle'
const numbers = [1, 2, 3];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*<Element1/>*/}
        <Clock/>
        <WebSite/>
        <Toggle/>
        <Popper/>
        <LoginControl/>
        <NumberList numbers={numbers}/>
        <ComAPIController/>
        <LifeCycle/>
      </header>
    </div>
  );
}

export default App;
