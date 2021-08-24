import React from 'react'
import { useSelector } from 'react-redux'
import {getSenators} from '../../actions'
import styled from 'styled-components'
import Senator from './sen'

export const SignupSenators = ({ userState }) => {

    const [userSenators, setUserSenators] = React.useState()
    getSenators('all')
    const senators = useSelector(state => state.senators.senators)
    React.useEffect(() => {
        if (userState) {
            senators && setUserSenators(senators.filter(s => {
                return s.state_code === userState
            }))
        }
    }, [userState])

    return (
        <SignupSenatorsWrapper>
            <div className='center-content'>
                <h3>Your senators</h3>
                {userSenators && <div>
                    <div><Senator senator={userSenators[0]} /></div>
                    <div><Senator senator={userSenators[1]} /></div>
                </div>}
            </div>
        </SignupSenatorsWrapper>
    )
}

const SignupSenatorsWrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    .center-content {
        width: 80%;
        margin: 0 auto;
    }
`
