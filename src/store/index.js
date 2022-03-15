import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterSlice";

export const storeRedux = configureStore({
    reducer: counterSlice
})