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
        <p>add a label and input for email</p>
        <p>add a label and input for password</p>
        <p>when the user clicks on a label, it should select the corresponding input</p>
        <p>add one button element with the text “OK”</p>
      </div>
      {/* Footer */}
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;