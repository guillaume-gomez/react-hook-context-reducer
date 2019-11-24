import React, { useContext } from 'react';
import { ReducerContext } from "./ReducerContext";

const Cart: React.FC = () => {
  const { state } = useContext(ReducerContext);
  return (
    <div>
      <h3>Cart</h3>
      {
        Object.entries(state).map(([key, value]) =>
          <p key={key}>
            <b>{key} :</b>
            <i>{value}</i>
         </p>
        )
      }
    </div>
  );
}

export default Cart;
