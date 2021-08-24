import axios from 'axios'
import { senatorUrl } from './action.urls'
import {
    GET_SENATORS_SUCCESS
} from './types'

export const getSenators = (state) => {
    return (dispatch) => {
        axios.get(`${senatorUrl}/${state}`)
            .then(response => {
                console.log(response)
                dispatch({ type: GET_SENATORS_SUCCESS, payload: { senators: response.data.data } })
            }).catch(() => {
                console.log('Senators error!')
            })
    }
}
