import cockpit from 'cockpit';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
          cockpit.jump("/system")
        }}>
          go to
        </button>
    </div>
  );
}

export default App;
