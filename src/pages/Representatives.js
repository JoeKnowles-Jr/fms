import React from 'react'
import { useSelector } from 'react-redux'
import { getRepresentatives } from '../actions'
import styled from 'styled-components'
import {RepresentativesPage} from '../components/representative'
import { FilterHeader, getDemocrats, getRepublicans, filterByState } from '../components/filter'

const Representatives = () => {
    const [userState, setUserState] = React.useState('all')
    const [filtered, setFiltered] = React.useState([])
    getRepresentatives('all')
    const representatives = useSelector(state => state.representatives.representatives)
    const user = useSelector(state => state.auth.user)

    React.useEffect(() => {
        filterByState(userState, user, representatives, setFiltered)
    }, [userState, representatives])
    
    return (
        <RepresentativesWrapper>
            <FilterHeader page='Representatives' userState={userState} setUserState={setUserState} />
            <RepresentativesPage democrats={getDemocrats(filtered)} republicans={getRepublicans(filtered)} />
        </RepresentativesWrapper>
    )

}

const RepresentativesWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    position: relative;
`

export default Representatives
