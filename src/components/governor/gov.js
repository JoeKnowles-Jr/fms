import React from 'react';
import styled from 'styled-components';

const Governor = ({ governor, clicked }) => {
    if (!governor) {
        return (
            <NoData>
                <span>No Governor Data!</span>
            </NoData>
        );
    }

    const handleClick = () => {
        clicked(governor);
    }

    const party = governor.party === 'republican' ? 'R-' : governor.party === 'democrat' ? 'D-' : 'I-';
    const partyState = '(' + party + governor.state_code + ')';

    return (
        <GovernorWrapper onClick={handleClick}>
            <div className={`base ${governor.party}`}>
                {governor.party === 'republican' ?
                    <div>
                        <img width="20%" src={governor.photo_url} alt='governor_photo' />
                        <span>{governor.first_name} {governor.last_name} {partyState}</span>
                    </div>
                    :
                    <div>
                        <span>{governor.first_name} {governor.last_name} {partyState}</span>
                        <img width="20%" src={governor.photo_url} alt='governor_photo' />
                    </div>
                }
            </div>
        </GovernorWrapper>
    );
};

const NoData = styled.div`
    padding: 2rem;
    background-color: #333;
    color: white;
    border-radius: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const GovernorWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background-color: #999;
    border: 1px solid blue;
    border-radius: 13px;
    padding: 0.5rem;
    margin: 1rem auto;
    .base>div {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        color: #ccc;
        text-shadow: 2px 2px black;
        font-weight: bold;
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
    :hover {
        border: 1px solid rgba(0, 128, 0, 0.5);
        cursor: pointer;
    }
`;

export default Governor;
