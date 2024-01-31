import React from 'react';
import logo from './Holberton Logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
      {/* Body */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"/>
        <button>OK</button>
      </div>
      {/* Footer */}
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;