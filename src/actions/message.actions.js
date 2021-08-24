import { SET_MESSAGE } from './types'

export const setMessage = (msg) => {
    return (dispatch) => {
        dispatch({ type: SET_MESSAGE, payload: { message: msg } })
    }
}
