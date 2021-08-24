import React from 'react'
import { useSelector } from 'react-redux'
import { getGovernor } from '../actions'
import styled from 'styled-components'
import { GovernorPage } from '../components/governor'
import { FilterHeader, getDemocrats, getRepublicans, filterByState } from '../components/filter'

const Governors = () => {
    const [userState, setUserState] = React.useState('all')
    const [filtered, setFiltered] = React.useState([])
    getGovernor('all')
    const governors = useSelector(state => state.governors.governors)
    const user = useSelector(state => state.auth.user)

    React.useEffect(() => {
        filterByState(userState, user, governors, setFiltered)
    }, [userState, governors])

    const governorClicked = async (name) => {
        // const newNews = getDataNews(name)
        // console.log(newNews)
        // this.setState((state) => {news: newNews})
        console.log("Governor clicked!")
    }

    return (
        <GovernorsWrapper>
            <FilterHeader page='Governors' userState={userState} setUserState={setUserState} />
            <GovernorPage clicked={governorClicked} democrats={getDemocrats(filtered)} republicans={getRepublicans(filtered)} />
        </GovernorsWrapper>
    )
}

const GovernorsWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    position: relative;
`

export default Governors
