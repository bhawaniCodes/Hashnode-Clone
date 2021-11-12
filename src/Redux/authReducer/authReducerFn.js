import { GET_CURRENT_USER } from "./actionTypes"

const initState = {
    user: null
}

export const authReducerFn = (state= initState, { type, payload}) => {
    switch (type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                user: payload
            }
        default: return {...state}
    }
}