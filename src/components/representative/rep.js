import React from 'react';
import styled from 'styled-components';

const Representative = ({ clicked, representative }) => {
    if (!representative) {
        return (<NoData>
            <span>No Representative Data!</span>
        </NoData>); }

    const handleClick = () => {
        clicked(representative)
    }
    const party = representative.party === 'republican' ? 'R-' : representative.party === 'democrat' ? 'D-' : 'I-';
    const partyState = '(' + party + representative.state_code + ')';

    return (
        <RepresentativeWrapper onClick={handleClick}>
            <div className={`base ${representative.party}`}>
                {representative.party === 'republican' ?
                    <div>
                        <img width="20%" src={representative.photo_url} alt='representative_photo' />
                        <div>
                            <span>{representative.first_name} {representative.last_name} {partyState}</span>
                            <p>District {representative.district}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <span>{representative.first_name} {representative.last_name} {partyState}</span>
                            <p>District {representative.district}</p>
                        </div>
                        <img width="20%" src={representative.photo_url} alt='representative_photo' />
                    </div>
                }
            </div>
        </RepresentativeWrapper>
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

const RepresentativeWrapper = styled.div`
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

export default Representative;
