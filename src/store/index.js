import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    preloadedState: {
        counter: {
            value: 10
        }
    }
})