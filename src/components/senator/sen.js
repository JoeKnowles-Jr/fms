import React from 'react'
import styled from 'styled-components'

const Senator = ({ clicked, senator }) => {
    if (!senator) {
        return (<NoData><span>No Senator Data!</span></NoData>)
    }

    const handleClick = () => {
        console.log('handleClick')
        clicked(senator)
    }
    
    const party = senator.party === 'republican' ? 'R-' : senator.party === 'democrat' ? 'D-' : 'I-'
    const partyState = '(' + party + senator.state_code + ')'

    return (
        <SenatorWrapper onClick={() => handleClick()}>
            <div className={`base ${senator.party}`}>
                {senator.party === 'republican' ?
                    <div>
                        <div>
                            <span>{senator.first_name} {senator.last_name} {partyState}</span>
                            <p>Class {senator.class} - Term Ends {senator.term_end}</p>
                        </div>
                        <img width="20%" src={senator.photo_url} alt='senator_photo' />
                    </div>
                    :
                    <div>
                        <img width="20%" src={senator.photo_url} alt='senator_photo' />
                        <div>
                            <span>{senator.first_name} {senator.last_name} {partyState}</span>
                            <p>Class {senator.class} - Term Ends {senator.term_end}</p>
                        </div>
                    </div>                
                }        
            </div>
        </SenatorWrapper>
    )
}

const NoData = styled.div`
    padding: 2rem;
    background-color: #333;
    color: white;
    border-radius: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

const SenatorWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
`

export default Senator
