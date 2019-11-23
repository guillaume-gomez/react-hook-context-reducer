interface stateInterface {
  oranges: number;
  tomatoes: number;
  salads: number;
  [key: string]: number;
}


interface actionInterface {
  itemName: "oranges" | "tomatoes" | "salads";
  type: "buy" | "drop";
}

export const initialState: stateInterface = {
  oranges: 0,
  tomatoes: 0,
  salads: 0
};


function buyItem(state: stateInterface, itemName: string) {
  const nbItem = state[itemName];
  const newState = {...state, [itemName]: (nbItem + 1) }
  return newState;
}

function dropItem(state: stateInterface, itemName: string) {
  const nbItem = state[itemName as any];
  const newItem = (nbItem - 1) < 0 ? 0 : (nbItem - 1);
  const newState = {...state, [itemName]: (nbItem - 1) }
  return newState;
}

export default function reducer(state: stateInterface, action: actionInterface) {
  switch (action.type) {
    case 'buy':
      return buyItem(state, action.itemName);
    case 'drop':
      return dropItem(state, action.itemName);
    default:
      throw new Error();
  }
}