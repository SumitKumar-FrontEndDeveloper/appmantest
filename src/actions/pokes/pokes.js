import {
  POKE_LIST_FETCH_REQUEST,
  POKE_LIST_FETCH_FAILURE
} from "./types";

export const pokeListRequest = (data) => {
  return {
    type: POKE_LIST_FETCH_REQUEST,
    ...data
  };
};

export const pokeListFailure = (error) => {
  return {
    type: POKE_LIST_FETCH_FAILURE,
    error,
  };
};
