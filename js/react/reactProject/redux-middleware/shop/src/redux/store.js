import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"
import { composeWithDevTools } from "@redux-devtools/extension";
//import rootReducer from "./reducers/index" index가 기본파일로 자동으로 아래와 같이 인식한다.

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;