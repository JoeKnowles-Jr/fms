import React from 'react'
import styled from 'styled-components'

const GovernorDetails = ({ clicked, governor }) => {
    if (!governor) {
        return <NoData>
            <span>No Governor Data!</span>
        </NoData>
    }

    const handleClick = () => {
        clicked({
            first: governor.first_name,
            last: governor.last_name
        })
    }
    const party = governor.party === 'republican' ? 'R-' : governor.party === 'democrat' ? 'D-' : 'I-'
    const partyState = '(' + party + governor.state_code + ')'

    return (
        <GovernorWrapper onClick={handleClick}>
            <div className={`base ${governor.party}`}>
                {governor.party === 'republican' ?
                    <div>
                        <div className='top'>
                            <span>
                                {governor.first_name} {governor.last_name}
                                <br />
                                {partyState}
                            </span>
                            <img width="40%" src={governor.photo_url} alt='governor' />
                        </div>
                    </div>
                    :
                    <div>
                        <div className='top'>
                            <img width="40%" src={governor.photo_url} alt='governor' />
                            <span>
                                {governor.first_name} {governor.last_name}
                                <br />
                                {partyState}
                            </span>
                        </div>
                    </div>
                }
                <div className='bio'>{governor.biography}</div>
            </div>

        </GovernorWrapper>
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

const GovernorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background-color: #999;
    border: 1px solid blue;
    border-radius: 13px;
    padding: 0.5rem;
    margin: 2rem auto;
    .base>div {
        width: 100%;
        padding: 1.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        .top {
            display: flex;
            justify-content: space-around;
            margin-bottom: 1rem;
        }
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

export default GovernorDetails
