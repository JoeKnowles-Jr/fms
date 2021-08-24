import { SET_MESSAGE } from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: action.payload.message }
        default:
            return state
    }
}
