import { createStore, combineReducers, applyMiddleware } from "redux";
import tableReducer from "./table-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  tablePage: tableReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
