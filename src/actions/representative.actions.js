import axios from 'axios'
import { representativeUrl } from './action.urls'
import {
    GET_REPRESENTATIVES_SUCCESS
} from './types'

export const getRepresentatives = (state) => {
    return (dispatch) => {
        axios.get(`${representativeUrl}/${state}`)
            .then(response => {
                console.log(response)
                dispatch({ type: GET_REPRESENTATIVES_SUCCESS, payload: { representatives: response.data.data } })
            }).catch(() => {
                console.log('Representatives error!')
            })
    }
}
