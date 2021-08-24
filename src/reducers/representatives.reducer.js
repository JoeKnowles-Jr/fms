import {
    GET_REPRESENTATIVES_SUCCESS
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case GET_REPRESENTATIVES_SUCCESS:
            return { ...state, representatives: action.payload.representatives }
        default:
            return state
    }
}
