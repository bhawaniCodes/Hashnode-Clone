import { createStore } from "redux";
import { authReducerFn } from "./authReducer/authReducerFn";

export const store = createStore(
    authReducerFn,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);
