import * as actions from "./pokes";
import * as types from "./types";
import { fetchPokeList } from "./index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";
jest.mock("axios");
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test all action in", () => {
  it("should create an action to add a todo", () => {
    const expectedActionRequest = {
      type: types.POKE_LIST_FETCH_REQUEST,
    };
    const expectedActionGetError = {
      type: types.POKE_LIST_FETCH_FAILURE,
      error: {},
    };

    expect(actions.pokeListRequest({})).toEqual(expectedActionRequest);
    expect(actions.pokeListFailure({})).toEqual(expectedActionGetError);
  });
});

describe("Action Creator for Articles list", () => {
 
    mockAxios.create.mockImplementation((config) => mockAxios);
    let requestCallback = () => {
      console.log("There were no interceptors");
    };
    mockAxios.interceptors.request.use.mockImplementation((callback) => {
      requestCallback = callback;
    });
    mockAxios.interceptors.response.use.mockImplementation((callback) => {
      requestCallback = callback;
    });
  
  it("should dispatch action with status added", () => {
    const payload = {
      isError: false,
    };
    mockAxios.get.mockResolvedValueOnce({
      response: { status: 200, isLoading : false,taskList : {}},
    });
    const expectedAction = [
      { type: types.POKE_LIST_FETCH_REQUEST, payload },
    ];
    const store = mockStore({});

    store.dispatch(fetchPokeList()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedAction);
    });
  });
});


describe("Error case of action", () => {
  beforeEach(() => {
    mockAxios.create.mockImplementation((config) => {});
  });
  it("should dispatch action with error", () => {
    const payload = {
      isError: true,
      response: { status: 400 },
      status : 400
    };
    
    mockAxios.get.mockResolvedValueOnce({
      response: { status: 400 },
      status : 400
    });
    const store = mockStore({
      response: { status: 400 },
      status : 400
    });
    const expectedUpdateAction = [
      { type: types.TODO_UPDATE_FAILURE, payload },
    ];
    store.dispatch(fetchPokeList()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedUpdateAction);
    });
  });
});