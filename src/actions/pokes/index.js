import {
  pokeListRequest,
  pokeListFailure,
} from "./pokes";
import API from "../../api";

export const fetchPokeList = () => async (dispatch) => {
  try {
    dispatch(pokeListRequest({isLoading : true}));
    const headers = {};
    const response = await API.get("http://localhost:3030/api/cards", {}, undefined)
    dispatch(pokeListRequest({isLoading : false,pokeList: response?.cards}));
    return response?.cards;
  }
    catch(error) {
      dispatch(pokeListFailure(error));
      return false;
    }
};
