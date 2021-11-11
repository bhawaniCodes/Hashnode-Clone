import { GET_CURRENT_USER } from "./actionTypes";

export const getEmail = (email) => {
    return { type: GET_CURRENT_USER, payload: email };
}