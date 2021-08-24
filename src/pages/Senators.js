import React from 'react'
import { useSelector } from 'react-redux'
import { getSenators } from '../actions'
import styled from 'styled-components'
import { SenatorsPage } from '../components/senator'
import { FilterHeader, getDemocrats, getRepublicans, filterByState } from '../components/filter'

const Senators = () => {
    const [userState, setUserState] = React.useState('all')
    const [filtered, setFiltered] = React.useState([])
    getSenators('all')
    const senators = useSelector(state => state.senators.senators)
    console.log("senators")
    console.log(senators)
    const user = useSelector(state => state.auth.user)

    React.useEffect(() => {
        filterByState(userState, user, senators, setFiltered)
    }, [userState, senators])

    const senatorClicked = async (name) => {
        // const newNews = getDataNews(name)
        // console.log(newNews)
        // this.setState((state) => {news: newNews})
        console.log("Senator clicked!")
    }

    return (
        <SenatorsWrapper>
            <FilterHeader page='Senators' userState={userState} setUserState={setUserState} />
            <SenatorsPage democrats={getDemocrats(filtered)} republicans={getRepublicans(filtered)} />
        </SenatorsWrapper>
    )
}

const SenatorsWrapper = styled.div`
    margin-top: 1rem;
    width: 100%;
    position: relative;
`

export default Senators
