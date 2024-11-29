import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

//reducer -> store를 변경한다.
let store = createStore(reducer);

export default store