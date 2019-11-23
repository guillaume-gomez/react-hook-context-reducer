import React, { useReducer } from 'react';
import './App.css';
import Cart from "./Cart";
import Shop from "./Shop";
import CartReducer, { initialState } from "./CartReducer";
import { ReducerContext } from "./ReducerContext";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <ReducerContext.Provider value={ { state, dispatch } }>
          <Shop />
          <div>
            -------------------------------------------------
          </div>
          <Cart />
        </ReducerContext.Provider>
      </header>
    </div>
  );
}

export default App;
