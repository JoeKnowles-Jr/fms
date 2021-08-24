import React from 'react'
import styled from 'styled-components'
import SenatorList from '../senator/sen.list'
import { getDataNews } from '../../services/news.service'

export const Landing = ({ senators, news }) => {

    const getDemocrats = () => {
        if (senators) {
            return senators.filter(s => {
                return s.party !== 'republican'
            })
        }
    }

    const getRepublicans = () => {
        if (senators) {
            return senators.filter(s => {
                return s.party === 'republican'
            })
        }
    }

    const senatorClicked = async (name) => {
        const newNews = getDataNews(name)
        console.log(newNews)
        // this.setState((state) => { news: newNews });
    }

    return (
        <LandingWrapper>
            <GridWrapper>
                <SenatorLeft>
                    {senators && <SenatorList clicked={senatorClicked} senators={getDemocrats()} />}
                </SenatorLeft>
                <CenterContent>
                    {!news && <div>News feeds coming soon!</div>}
                    {news && <div>News feeds coming soon!</div>}
                </CenterContent>
                <SenatorRight>
                    {senators && <SenatorList clicked={senatorClicked} senators={getRepublicans()} />}
                </SenatorRight>
            </GridWrapper>
        </LandingWrapper>
    )
}

const CenterContent = styled.div`
    background-color: #ddd;
    width: 100%;
`

const SenatorLeft = styled.div`
    background-color: #aaa;
`

const SenatorRight = styled.div`
    background-color: #aaa;
`

const GridWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 30vw 40vw 30vw;
    row-gap: 2rem;
    justify-content: space-around;
    align-items: space-around;
`

const LandingWrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    position: relative;
`

export default Landing
