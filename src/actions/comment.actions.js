import axios from 'axios'
import { commentUrl } from './action.urls'
import {
    GET_COMMENTS_SUCCESS,
    GET_COMMUNITIES_SUCCESS,
    CREATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_SUCCESS
} from './types'

export const getComments = () => {
    return (dispatch) => {
        axios.get(commentUrl)
        .then(response => {
                dispatch({ type: GET_COMMENTS_SUCCESS, payload: { comments: response.data.comments } })
            }).catch(() => {
                console.log('Comments error!')
            })
    }
}

export const getCommunities = () => {
    return (dispatch) => {
        axios.get(`${commentUrl}/communities`)
            .then(response => {
                dispatch({ type: GET_COMMUNITIES_SUCCESS, payload: { communities: response.data.communities } })
            }).catch(() => {
                console.log('Comments error!')
            })
    }
}

export const updateComment = ({ id, data }) => {
    const payload = {
        filter: id,
        update: data
    }
    return (dispatch) => {
        axios.put(`${commentUrl}`, payload)
            .then(response => {
                dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: { comment: response.data.comment } })
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
                dispatch({ type: CREATE_COMMENT_SUCCESS, payload: { comment: response.data.comment } })
            }).catch(() => {
                console.log("Insert comment error!")
            })
    }
}
