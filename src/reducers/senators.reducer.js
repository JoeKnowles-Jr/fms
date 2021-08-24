import {
    GET_SENATORS_SUCCESS
} from '../actions/types'

export const reducer = (state = null, action) => {

    switch (action.type) {
        case GET_SENATORS_SUCCESS:
            return { ...state, senators: action.payload.senators }
        default:
            return state
    }
}
