import axios from 'axios'
import { governorUrl } from './action.urls'
import {
    GET_GOVERNORS_SUCCESS,
    CREATE_GOVERNOR_SUCCESS
} from './types'

export const getGovernor = (state) => {
    return (dispatch) => {
        axios.get(`${governorUrl}/${state}`)
            .then(response => {
                dispatch({ type: GET_GOVERNORS_SUCCESS, payload: { governors: response.data.data } })
            }).catch(() => {
                console.log('Governors error!')
            })
    }
}

export const addGovernor = (governor) => {
    return (dispatch) => {
        axios.post(`${governorUrl}/add`, { governor: governor })
            .then(response => {
                dispatch({ type: CREATE_GOVERNOR_SUCCESS, payload: { message: response.data.message } })
            }).catch(() => {
                console.log("Insert error!")
            })
    }
}
