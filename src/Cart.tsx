import React, { useContext } from 'react';
import { ReducerContext } from "./ReducerContext";

const Cart: React.FC = () => {
  const { state } = useContext(ReducerContext);
  return (
    <div>
      Cart
      {
        Object.entries(state).map(([key, value]) =>
          <p>
            <b>{key} :</b>
            <i>{value}</i>
         </p>
        )
      }
    </div>
  );
}

export default Cart;
