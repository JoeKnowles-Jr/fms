import React from 'react'
import styled from 'styled-components'

const SenatorDetails = ({ clicked, senator }) => {
    if (!senator) {
        return <NoData>
            <span>No Senator Data!</span>
        </NoData>
    }
    const handleClick = () => {
        clicked({
            first: senator.first_name,
            last: senator.last_name
        })
    }
    const party = senator.party === 'republican' ? 'R-' : senator.party === 'democrat' ? 'D-' : 'I-'
    const partyState = '(' + party + senator.state_code + ')'

    return (
        <SenatorWrapper onClick={handleClick}>
            <div className={`base ${senator.party}`}>
                {senator.party === 'republican' ?
                    <div>
                        <div className='top'>
                            <span>
                                {senator.first_name} {senator.last_name}
                                <br />
                                {partyState}
                            </span>
                            <img width="40%" src={senator.photo_url} alt='senator' />
                        </div>
                    </div>
                    :
                    <div>
                        <div className='top'>
                            <img width="40%" src={senator.photo_url} alt='senator' />
                            <span>
                                {senator.first_name} {senator.last_name}
                                <br />
                                {partyState}
                            </span>
                        </div>
                    </div>
                }
                <div className='bio'>{senator.biography}</div>
            </div>
        </SenatorWrapper>
    )
}

const NoData = styled.div`
    padding: 2rem;
    background-color: #333;
    color: white;
    border-radius: 2rem;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

const SenatorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background-color: #999;
    border: 1px solid blue;
    border-radius: 13px;
    padding: 0.5rem;
    margin: 2rem auto;
    .base {
        width: 100%;
        padding: 1.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
    }
    .top {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .republican {
        background-color: rgba(255, 0, 0, 0.5);
        text-align: right;
    }
    .democrat {
        background-color: rgba(0, 0, 255, 0.5);
        text-align: left;
    }
    .independent {
        background-color: rgba(255, 255, 0, 0.5);
        text-align: center;
    }
`

export default SenatorDetails
