import { createStore } from "redux";
import { produce } from "immer";
import { datas } from "../src/data";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  employeeList: datas,
};

export const saveEmployee = (employee) => ({
  type: "saveEmployee",
  payload: employee,
});

function reducer(state = initialState, action) {
  if (action.type === "saveEmployee") {
    return produce(state, (draft) => {
      draft.employeeList.push(action.payload);
    });
  }

  return state;
}

export const store = createStore(reducer, initialState, reduxDevtools);