import { DECREASE, INCREMENT_COUNT } from "./countType"

export var incrementCount = () => {
  return {
    type:INCREMENT_COUNT
  }
}
export var decrease = () => {
  return {
    type: DECREASE,
  };
};