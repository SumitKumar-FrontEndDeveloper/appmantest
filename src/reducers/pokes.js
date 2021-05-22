import {
  POKE_LIST_FETCH_REQUEST,
  POKE_LIST_FETCH_FAILURE
} from "../actions/pokes/types";

const pokeReducer = (state, action) => {

  const defaultState = {
    isLoading: false,
    error: "",
    pokeList: null,
    ...state
  }
  switch (action.type) {
    case POKE_LIST_FETCH_REQUEST:
      return {
        ...defaultState,
        error: '',
        ...action
      };
    
    case POKE_LIST_FETCH_FAILURE:
      return {
        ...defaultState,
        error: "Something went wrong",
      };
    default:
      return defaultState;
  }
};
export default pokeReducer;
