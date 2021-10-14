import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  fetch("http://localhost:3001")
    .then(res => res.text())
    .then((result) => {
      setMessage(result);
    },
    (error) => {
      setMessage(JSON.stringify(error))
    }
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <p>
          Message from the server: {message}
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

export default App;
