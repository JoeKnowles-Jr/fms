import React from 'react';
import styled from 'styled-components';

const StateItem = ({ clicked, state, bg, but }) => {
    if (!state) { return (<div></div>); }

    const ItemButton = (but === true) ?
        styled.button`
            padding: 0;
            margin: 0;
            :hover {
                border: 1px solid rgba(0, 128, 0, 0.5);
                cursor: pointer;
                div > img {
                    opacity: 1;
                    z-index: 999;
                }
            }
        `
        :
        styled.div`
            z-index: -1;
        `

    return (
        <StateItemWrapper>
            <ItemButton className='item' onClick={() => clicked(state)}>
                {state && 
                        <StateWrapper>
                    <img
                        alt='state_photo'                        
                        src={bg === 'land' ? state.landscape_background_url : state.skyline_background_url}
                        />
                            <span>{state.state}</span>
                            <p>{state.nickname}</p>
                        </StateWrapper>                
                }
            </ItemButton>
        </StateItemWrapper>
    );

}

const StateWrapper = styled.div`
    max-width: 35vw;
    max-height: 35vw;
    margin: auto;
    position: relative;
    border: 1px solid white;
    img {
        width: 100%;
        opacity: 0.6;
    }
    span {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        color: #55a;
        text-shadow: 2px 2px #000, 3px 3px #fff;
        font-size: 3rem;
        font-weight: 900;
    }
    P {
        position: absolute;
        width: 80%;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.8rem;
        font-weight: 900;
        background-color: #aaa;
        text-shadow: 1px 1px #777;
        text-align: center;
        color: #000;
        padding: 0 1rem 0.25rem;
        border-radius: 2rem;
    }

`;



const StateItemWrapper = styled.div`
    .item {
        padding: 0;
    }
`;

export default StateItem;
