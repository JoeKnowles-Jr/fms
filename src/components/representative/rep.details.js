import React from 'react';
import styled from 'styled-components';

const RepresentativeDetails = ({ clicked, extended, representative }) => {

    const handleClick = () => {
        console.log('handleClick')
        clicked({
            first: representative.first_name,
            last: representative.last_name
        })
    }
    
    if (!representative) return (
        <NoData>
            <span>No Representative Data!</span>
        </NoData>
    )
    const party = representative.party === 'republican' ? 'R-' : representative.party === 'democrat' ? 'D-' : 'I-'
    const partyState = '(' + party + representative.state_code + ')'

    return (
        <RepresentativeWrapper>
            {representative && <div className={`base ${representative.party}`}>
                <div className='top'>
                    <img width="40%" src={representative.photo_url} alt='representative' />
                    <span>
                        {representative.first_name} {representative.last_name}
                        <br />
                        {partyState}
                    </span>
                </div>
                <div className='bio'>{representative.biography}</div>
            </div>}
            {!representative && <NoData>
                <span>No Representative Data!</span>
            </NoData>}
        </RepresentativeWrapper>
    )
}

const BaseRepresentative = styled.div`
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
    /* .bio {
        height: 30%;
        overflow-y: scroll;
    } */
`;

const Republican = styled(BaseRepresentative)`
    background-color: rgba(255, 0, 0, 0.5);
    text-align: right;
`;

const Independent = styled(BaseRepresentative)`
    background-color: rgba(255, 255, 0, 0.5);
    text-align: center;
`;

const Democrat = styled(BaseRepresentative)`
    background-color: rgba(0, 0, 255, 0.5);
    text-align: left;
`;

const NoData = styled.div`
    padding: 2rem;
    position: absolute;
    background-color: #333;
    color: white;
    border-radius: 2rem;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
`;

const RepresentativeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background-color: #999;
    border: 1px solid blue;
    border-radius: 13px;
    padding: 0.5rem;
    margin: 2rem auto;
    position: relative;
    .base {
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
`;

export default RepresentativeDetails;
