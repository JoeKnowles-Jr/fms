import React from 'react'
import styled from 'styled-components'
import SenatorList from './sen.list'
import SenatorDetails from './sen.details'

export const SenatorsPage = ({ democrats, republicans }) => {
    const [selected, setSelected] = React.useState(null)

    const clicked = (senator) => {
        setSelected(senator)
        window.scrollTo(0, 0)
    }

    return (
        <SenatorsWrapper>
            <div className='grid-wrapper'>
                <div className='left'>
                    {democrats && <SenatorList clicked={clicked} senators={democrats} />}
                </div>
                <div className='center'>
                    {selected && <SenatorDetails senator={selected} />}
                </div>
                <div className='right'>
                    {republicans && <SenatorList clicked={clicked} senators={republicans} />}
                </div>
            </div>
        </SenatorsWrapper>
    )
}

const SenatorsWrapper = styled.div`
    width: 100%;
    .grid-wrapper {
        width: 100%;
        padding: 1rem;
        min-height: 100vh;
        display: flex;
        justify-content: space-between;
        .left {
            width: 75%;
        }
        .center {
            width: 100%;
            position: relative;
        }
        .right {
            width: 75%;
        }
    }
`
