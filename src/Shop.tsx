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

  return (
    <div>
      Shop
       <div>
         <button onClick={addItem("oranges")} type="button">Buy Oranges</button>
         <button onClick={addItem("tomatoes")} type="button">Buy Tomatoes</button>
         <button onClick={addItem("salads")} type="button">Buy Salads</button>
       </div>
    </div>
  );
}

export default Shop;
