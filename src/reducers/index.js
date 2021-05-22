import { combineReducers } from "redux";
import pokeReducer from "./pokes";

export default function getRootReducer() {
  return combineReducers({
    pokeReducer,
  });
}
