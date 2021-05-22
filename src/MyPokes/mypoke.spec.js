import React, { useState as useStateMock } from "react";

import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
import MyPokes from "./index";

import * as redux from "react-redux";
const mockStore = configureMockStore([thunk]);
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();

describe("To Do List test", () => {
  let wrapper;
  let useEffect;
  let store;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };
  beforeEach(() => {
    /* mocking store */
   
    store = configureMockStore([thunk])({
      pokeReducer: {
        isError: false,
        isLoading: false,
        pokeList: [],
        error: "",
      }
    });

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const setHookState = (newState) =>
      jest.fn().mockImplementation(() => [newState, () => {}]);

    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((state) => store.getState().pokeReducer);
    jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);
    useEffect = jest.spyOn(React, "useEffect").mockImplementation();
    mockUseEffect(); // 2 times
    wrapper = mount(<MyPokes store={store} />);
  });
  it("test if there is access token", () => {
     //wrapper.find(Button).at(0).simulate('click')
  });
  
});
