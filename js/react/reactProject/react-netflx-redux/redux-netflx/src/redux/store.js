import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

import movieReducer from './reducers/moviesSlice'

const store = configureStore({
    reducer : {
        movie : movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;