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
            <div className='grid-wrapper'>
                <div>
                    {senators && <SenatorList clicked={senatorClicked} senators={getDemocrats()} />}
                </div>
                <div className='center-content'>
                    {!news && <div>News feeds coming soon!</div>}
                    {news && <div>News feeds coming soon!</div>}
                </div>
                <div>
                    {senators && <SenatorList clicked={senatorClicked} senators={getRepublicans()} />}
                </div>
            </div>
        </LandingWrapper>
    )
}

const LandingWrapper = styled.div`
    width: 100%;
    position: relative;
    .grid-wrapper {
        width: 100%;
        min-height: 80vh;
        display: grid;
        grid-template-columns: 30% 40% 30%;
        .center-content {
            width: 100%;
        }
    }
`

export default Landing
