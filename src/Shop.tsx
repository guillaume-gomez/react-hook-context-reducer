import React, { useContext } from 'react';
import { ReducerContext } from "./ReducerContext";

const Shop: React.FC = () => {
  const { dispatch } = useContext(ReducerContext);
  
  function addItem(itemName: "oranges" | "tomatoes" | "salads") {
    return () => {
      if (typeof dispatch === "function") {
        dispatch({ type: 'buy', itemName })
      }
    }
  }

  function dropItem(itemName: "oranges" | "tomatoes" | "salads") {
    return () => {
      if (typeof dispatch === "function") {
        dispatch({ type: 'drop', itemName })
      }
    }
  }

  return (
    <div>
      <h3>Shop</h3>
       <div>
         <button onClick={addItem("oranges")} type="button">Buy Oranges</button>
         <button onClick={addItem("tomatoes")} type="button">Buy Tomatoes</button>
         <button onClick={addItem("salads")} type="button">Buy Salads</button>
       </div>
       <div>
         <button onClick={dropItem("oranges")} type="button">Drop Oranges</button>
         <button onClick={dropItem("tomatoes")} type="button">Drop Tomatoes</button>
         <button onClick={dropItem("salads")} type="button">Drop Salads</button>
       </div>
    </div>
  );
}

export default Shop;
