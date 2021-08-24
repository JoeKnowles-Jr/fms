import axios from 'axios'
import History from '../history.js'
import { userUrl } from './action.urls'
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from './types'

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        // submit email/password to the server
        axios.post(`${userUrl}/authenticate`, { email, password })
            .then(response => {
                console.log("JSON.stringify(response.data.user)")
                console.log(JSON.stringify(response.data.user))

                // if request is good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER, payload: { user: response.data.user } })

                // - save the jwt token
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))

                // - redirect to the homepage
                History.push('/')

            }).catch(() => {
                // if request is bad...
                // - show an error to the user
                dispatch(authError('Bad Login Info'))
            })
    }
}

export const signupUser = (params) => {
    return (dispatch) => {
        console.log("signup params")
        console.log(params);
        // submit user data to the server
        axios.post(`${userUrl}/signup`, params)
            .then(response => {
                console.log("response")
                console.log(response)
                dispatch({ type: AUTH_USER, payload: { user: response.data.user } })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                History.push('/')
            })
            .catch(err => {
                dispatch(authError(err.response.data.error))
            })
    }
}

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export const signoutUser = () => {
    localStorage.clear()
    History.push('/')
    return { type: UNAUTH_USER }
}
