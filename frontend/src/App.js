import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

const App = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {children}
      </header>
    </div>
  );
}

export default App;
