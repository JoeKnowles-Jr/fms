import React from 'react'
import styled from 'styled-components'
import StateItem from './state.item'

const StateDetails = ({ state }) => {
    
    const addSuffix = (num) => {
        const numString = num.toString()
        const suffix = numString[numString.length - 1] === '1' ? 'st' :
            numString[numString.length - 1] === '2' ? 'nd' :
                numString[numString.length - 1] === '3' ? 'rd' :
                    'th'
        return num + suffix
    }

    const formatPopulation = (pop) => {
        const popString = pop.toString()
        let retVal = popString.substring(0, popString.length - 3) + ',' + popString.substr(popString.length - 3)
        if (retVal.length > 7) {
            retVal = retVal.substring(0, retVal.length - 7) + ',' + retVal.substr(retVal.length - 7)
        }
        return retVal
    }

    return (
        <StateDetailsWrapper>
            {state && <div>
                <div className='top'>
                    <div className='stateitem'>
                        <StateItem but={false} bg='sky' state={state} />
                    </div>
                    <div>
                        <p>{addSuffix(state.admission_number.toString())} state</p>
                        <p>Population: {formatPopulation(state.population)}<br />{addSuffix(state.population_rank)} most populous</p>
                        <p>Capital: <a href={state.capital_url} target='_blank'>{state.capital_city}</a></p>
                    </div>
                    <div className='mapimage'>
                        <img width='75%' src={state.map_image_url} />
                    </div>
                </div>
                <div className='middle'>
                    <div className='flag'>
                        <img width='25%' src={state.state_flag_url} />
                        <img width='15%' src={state.state_seal_url} />
                    </div>
                    <div className='links'>
                        <a href={state.constitution_url}>
                            State Constitution
                        </a>
                    </div>
                </div>
                <div className='bottom'>

                </div>
            </div>}
        </StateDetailsWrapper>
    )
}

const StateDetailsWrapper = styled.div`
    width: 100%;
    a {
        color: black;
        text-decoration: underline;
    }
    .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .stateitem {
            width: 40%;
        }
        .mapimage {
            width: 40%;
        }
    }
    .middle {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .flag {
            width: 100%;
        }
        .links {
            width: 100%;
        }
    }
    .bottom {
        width: 100%;
        display: flex;
    }
`;

export default StateDetails