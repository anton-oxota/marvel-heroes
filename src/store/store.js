import { configureStore } from "@reduxjs/toolkit";

import charReducer from "./slices/charSlice";
import comicReducer from "./slices/comicSlice";

const store = configureStore({
    reducer: {
        charReducer,
        comicReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store