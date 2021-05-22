import * as actions from "./to-do";
import * as types from "./types";
import { fetchToDoList, updateStatus, addTask } from "./index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";
jest.mock("axios");
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test all action in", () => {
  it("should create an action to add a todo", () => {
    const expectedActionRequest = {
      type: types.TODO_LIST_FETCH_REQUEST,
    };
    const expectedActionGetError = {
      type: types.TODO_LIST_FETCH_FAILURE,
      error: {},
    };

    const expectedADDActionRequest = {
      type: types.TODO_ADD_REQUEST,
    };
    const expectedADDActionGetError = {
      type: types.TODO_ADD_FAILURE,
      error: {},
    };

    const expectedUpdateActionRequest = {
      type: types.TODO_UPDATE_REQUEST,
    };
    const expectedUpdateActionGetError = {
      type: types.TODO_UPDATE_FAILURE,
      error: {},
    };
    

    expect(actions.todoListRequest({})).toEqual(expectedActionRequest);
    expect(actions.todoListFailure({})).toEqual(expectedActionGetError);

    expect(actions.addToDoRequest({})).toEqual(expectedADDActionRequest);
    expect(actions.addToDoFailure({})).toEqual(expectedADDActionGetError);

    expect(actions.updateToDoRequest({})).toEqual(expectedUpdateActionRequest);
    expect(actions.updateToDoFailure({})).toEqual(expectedUpdateActionGetError);
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
      { type: types.TODO_LIST_FETCH_REQUEST, payload },
    ];
    const store = mockStore({});

    store.dispatch(fetchToDoList()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedAction);
    });
  });

  

  it("should dispatch action with status added", () => {
    const payload = {
      isError: false,
    };
    mockAxios.post.mockResolvedValueOnce({
      data: { value: "test" },
    });
    const expectedAction = [
      { type: types.TODO_UPDATE_REQUEST, payload },
    ];
    const store = mockStore({});

    store.dispatch(updateStatus()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedAction);
    });
  });
  it("should dispatch action with status added", () => {
    const payload = {
      isError: false,
    };
    mockAxios.post.mockResolvedValueOnce({
      data: { value: "test" },
    });
    const expectedAction = [
      { type: types.TODO_ADD_REQUEST, payload },
    ];
    const store = mockStore({});
    store.dispatch(addTask()).then(() => {
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

    const expectedAction = [
      { type: types.TODO_LIST_FETCH_FAILURE, payload },
    ];
    store.dispatch(fetchToDoList()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedAction);
    });

    //
    const expectedUpdateAction = [
      { type: types.TODO_UPDATE_FAILURE, payload },
    ];
    store.dispatch(updateStatus()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedUpdateAction);
    });

    //
    const expectedADDAction = [
      { type: types.TODO_ADD_FAILURE, payload },
    ];
    store.dispatch(addTask()).then(() => {
      const actionList = store.getActions();
      expect(actionList).toEqual(expectedADDAction);
    });
  });
});