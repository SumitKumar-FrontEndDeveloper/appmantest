import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getRootReducer from "./reducers";
let middleware = [thunk];
export default function getStore() {
  const routeReducer = getRootReducer();
  const store = createStore(routeReducer, {}, applyMiddleware(...middleware));
  return store;
}
