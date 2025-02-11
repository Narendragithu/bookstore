import { DECREASE, INCREMENT_COUNT } from "./countType"


var initialState = {
  count:0
}

export var countReducer=(state=initialState,action)=>{
  switch (action.type) {
    case INCREMENT_COUNT: {
      return { count: state.count + 1 };
      break;
    }
    case DECREASE: {
      return { count: state.count - 1 };
      break;
    }
    default:
      return state;
  }
}