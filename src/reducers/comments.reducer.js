import {
    GET_COMMENTS_SUCCESS,
    GET_COMMUNITIES_SUCCESS
} from '../actions/types'

const initialState = {
    comments: [],
    communities: []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload.comments }
        case GET_COMMUNITIES_SUCCESS:
            console.log(action.payload.communities)
            return { ...state, communities: action.payload.communities }
        default:
            return state
    }
}
