import axios from 'axios'
import { stateUrl } from './action.urls'
import {
    GET_STATES_SUCCESS
} from './types'

export const getStates = (state) => {
    return (dispatch) => {
        axios.get(`${stateUrl}/${state}`)
            .then(response => {
                dispatch({ type: GET_STATES_SUCCESS, payload: { states: response.data.data } })
            })
            .catch(() => {
                console.log('States error!')
            })
    }
}
