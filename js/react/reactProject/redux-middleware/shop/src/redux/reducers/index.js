import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

/*
https://redux.js.org/api/combinereducers
여러개의 리듀서 한곳에서 합치기
*/

export default combineReducers({
    auth : authenticateReducer
    , product : productReducer
});