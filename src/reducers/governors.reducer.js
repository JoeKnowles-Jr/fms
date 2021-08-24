import {
    GET_GOVERNORS_SUCCESS
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case GET_GOVERNORS_SUCCESS:
            return { ...state, governors: action.payload.governors }
        default:
            return state
    }
}
