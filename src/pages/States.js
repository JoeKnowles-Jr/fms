import React from 'react'
import { useSelector } from 'react-redux'
import { getStates } from '../actions'
import styled from 'styled-components'
import { StatesPage } from '../components/states'
import { FilterHeader } from '../components/filter'

const States = () => {
    const [userState, setUserState] = React.useState('all')
    const [filtered, setFiltered] = React.useState([])
    getStates('all')
    const states = useSelector(state => state.states.states)
    const user = useSelector(state => state.auth.user)

    React.useEffect(() => {
        switch (userState) {
            case 'mine':
                user && setFiltered(
                    states.filter(s => {
                        return s.code === user.state
                    })
                )
                break
            case 'all':
                setFiltered(states)
                break
            default:
                setFiltered(
                    states.filter(s => {
                        return s.code === userState
                    })
                )
        }
    }, [userState, states])

    return (
        <StatesWrapper>
            <FilterHeader page='States' userState={userState} setUserState={setUserState} />
            <StatesPage states={filtered} />
        </StatesWrapper>
    )
}

const StatesWrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    position: relative;
`

export default States
