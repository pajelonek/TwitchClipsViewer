import React from 'react';
import './App.css';
import JobsList from "./components/JobsList";
import Album from "./components/Album"

function App() {

  return (
      <div className="App">
        <h1>Jobs</h1>
          <Album />
      </div>
  );
}

export default App;
