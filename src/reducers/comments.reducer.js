import {
    GET_COMMENTS_SUCCESS
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload.comments }
        default:
            return state
    }
}
