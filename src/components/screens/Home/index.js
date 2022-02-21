import './style.css';
import logo from '../../../assets/logo.svg';
import React from 'react';

function Home() {
  return (
    <div className="Home">
     <h1>Home</h1>
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
      </header>
      
    </div>
  );
}

export default Home;
