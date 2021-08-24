import axios from 'axios'
import { commentUrl } from './action.urls'
import {
    GET_COMMENTS_SUCCESS,
    CREATE_COMMENT_SUCCESS
} from './types'

export const getComment = (state) => {
    // return (dispatch) => {
    //     axios.get(`${commentUrl}/${state}`)
    //         .then(response => {
    //             dispatch({ type: GET_COMMENT_SUCCESS, payload: { comment: response.data } })
    //             // - redirect to the homepage
    //             // History.push('/')
    //         }).catch(() => {
    //             console.log('Comments error!')
    //         })
    // }
}

export const updateComment = ({ id, data }) => {

    return (dispatch) => {
        axios.put(`${commentUrl}`, payload)
            .then(response => {
                console.log("comment")
                console.log(data)
                // dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: { senators: response.data } })
            }).catch(() => {
                console.log("Update comment error!")
            })
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        axios.post(`${commentUrl}/add`, { comment: comment })
            .then(response => {
                console.log(response)
                dispatch({ type: CREATE_COMMENT_SUCCESS, payload: { comment: response.data } })
            }).catch(() => {
                console.log("Insert comment error!")
            })
    }
}
