import React from 'react';
import './App.css';
import Cart from "./Cart";
import Shop from "./Shop";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Shop />
        <div>
          separator
        </div>
        <Cart />
      </header>
    </div>
  );
}

export default App;
