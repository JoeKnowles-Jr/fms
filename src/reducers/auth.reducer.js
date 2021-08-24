import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case AUTH_USER:
            return { ...state, user: action.payload.user, error: '', authenticated: true }
        case UNAUTH_USER:
            return { ...state, user: null, authenticated: false }
        case AUTH_ERROR:
            return { ...state, user: null, error: action.payload }
        default:
            return state
    }
}
