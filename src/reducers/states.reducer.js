import {
    GET_STATES_SUCCESS
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case GET_STATES_SUCCESS:
            return { ...state, states: action.payload.states }
        default:
            return state
    }
}
