import React from 'react';
import logo from './Holberton Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className={css(style.appHeaderH1)}>School dashboard</h1>
    </header>
  )
}

const style = StyleSheet.create({
  appHeader: {
    borderBottom: "3px solid #E0434C",
    display: "flex",
    alignItems: "center"
    height: "162px",
    width: "100%",
  },

  appHeaderImg: {
    height: "159px",
    width: "159px",
  },

  appHeaderH1: {
    color: "#E0434C",
    fontWeight: "900",
    fontSize: "2rem",
  },
});

export default Header;