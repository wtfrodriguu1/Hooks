import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Alterar Tema</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Mudar para Escuro' : 'Mudar para Claro'}
        </button>
        <p>O tema é: {theme}</p>
      </header>
    </div>
  );
}

export default App;
