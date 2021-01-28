import React from 'react';
import './App.css';
import Album from "./components/Album"
import Header from "./components/Header"

function App() {

  return (
      <div className="App">
          <Header/>
          <Album />
      </div>
  );
}

export default App;
