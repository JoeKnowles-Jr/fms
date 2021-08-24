import React from 'react'
import styled from 'styled-components'
import Senator from '../senator/sen'
import Governor from '../governor/gov'
import StateItem from '../states/state.item'
import RepresentativeList from '../representative/rep.list'

export const UserHome = ({ user, senators, senClicked, representatives, repClicked, governor, govClicked, userState, stateClicked }) => {

    const { sen1, sen2 } = senators

    return (
        <UserHomeWrapper>
            <div className='grid-wrapper'>
                <div className='side'>
                    <h2>Representatives</h2>
                    <RepresentativeList representatives={representatives} clicked={repClicked} />
                </div>
                <div className='center-content'>
                    <StateItem state={userState} clicked={stateClicked}/>
                    <h2>Governor</h2>
                    <Governor governor={governor} clicked={govClicked} />
                </div>
                <div className='side'>
                    <h2>Senators</h2>
                    {senators && <Senator clicked={senClicked} senator={sen1} />}
                    {senators && <Senator clicked={senClicked} senator={sen2} />}
                </div>
            </div>
        </UserHomeWrapper>
    )
}

const UserHomeWrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    position: relative;
    .grid-wrapper {
        width: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 30vw 40vw 30vw;
        row-gap: 2rem;
        justify-content: space-around;
        align-items: space-around;
        .side {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .center-content {
            width: 100%;
            text-align: center;
        }
    }
`
