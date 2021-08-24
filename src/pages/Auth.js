import React from 'react'
import styled from 'styled-components'
import Signin from '../components/auth/signin'
import Signup from '../components/auth/signup'
import {SignupSenators} from '../components/senator'

const Auth = () => {
    const [showRegister, setShowRegister] = React.useState(false)
    const [userState, setUserState] = React.useState(null)

    const showReg = () => {
        setShowRegister(true)
    }

    const showSig = () => {
        setShowRegister(false)
    }

    return (
        <AuthWrapper>
            <div className='form-wrapper'>
                <div className='auth-nav'>
                    <span className={`nav-btn ${showRegister ? '' : 'active'}`} onClick={showSig}>Sign In</span>
                    <span className={`nav-btn ${showRegister ? 'active' : ''}`} onClick={showReg}>Sign Up</span>
                </div>
                <div>
                    {showRegister && <Signup setUserState={setUserState} />}
                    {!showRegister && <Signin />}
                </div>
            </div>
            <div className='side'>
                {userState && <SignupSenators userState={userState} />}
            </div>
        </AuthWrapper>
    )
}

const AuthWrapper = styled.div`
    width: 99%;
    display: flex;
    align-items: top;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 4rem;
    margin: 2rem auto;
    color: white;
    background-color: #999;
    .form-wrapper {
        width: 45%;
        .auth-nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav-btn {
                padding: 0.5rem;
                color: #fff;
                font-size: 1.25rem;
                cursor: pointer;
            }
            .active {
                font-size: 2rem;
                font-weight: bolder;
                color: #0ff;
                text-shadow: 1px 1px #000;
            }
        }
    }
    .side {
        width: 50%;
        overflow: hidden;
        height: 70vh;
        border-radius: 2rem;
        background-color: #777;
    }
`

export default Auth
