import { configureStore } from "@reduxjs/toolkit";

import authenticateReducer from "./reducers/authenticateSlice"
import productReducer from "./reducers/productSlice"

const store = configureStore({
    reducer : {
        auth : authenticateReducer
        , product : productReducer
    }
});

export default store;