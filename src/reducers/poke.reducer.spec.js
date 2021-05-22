import pokeReducer from "./pokes";
import * as types from "../actions/pokes/types";

describe("Cutomer Profile OTP reducers", () => {
  it("should return the initial state", () => {
    expect(pokeReducer(undefined, {})).toEqual({
      isLoading: false,
      error: "",
      pokeList: null
    });
  });

  it("should handle POKE_LIST_FETCH_REQUEST", () => {
    let action = {
      type: types.POKE_LIST_FETCH_REQUEST,
    };
    const expected = {
      error: "",
      isLoading : false,
      pokeList: null,
      type : types.POKE_LIST_FETCH_REQUEST,
    };
    expect(pokeReducer({}, action)).toEqual(expected);
  });

  it("should handle POKE_LIST_FETCH_FAILURE", () => {
    let action = {
      type: types.POKE_LIST_FETCH_FAILURE,
    };
    const expected = {
      error : "Something went wrong",
      isLoading : false,
      pokeList: null,
    };
    expect(pokeReducer({}, action)).toEqual(expected);
  });
});
