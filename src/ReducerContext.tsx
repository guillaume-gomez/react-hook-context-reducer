import React from 'react';
import { initialState, actionInterface }  from "./CartReducer";

type StoreApi = {
  state: typeof initialState
  dispatch: React.Dispatch<actionInterface>
}

export const ReducerContext = React.createContext<StoreApi | typeof initialState>(initialState);

