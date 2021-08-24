import React from 'react';
import styled from 'styled-components';
import RepresentativeList from './rep.list';
import RepresentativeDetails from './rep.details';

export const RepresentativesPage = ({ democrats, republicans }) => {
    const [selected, setSelected] = React.useState(null)
    const [extended, setExtended] = React.useState(false)

    const clicked = (senator) => {
        setSelected(senator)
        window.scrollTo(0, 0)
    }

    return (
        <RepresentativesWrapper>
            <div className='grid-wrapper'>
                <div>
                    {democrats && <RepresentativeList clicked={clicked} representatives={democrats} />}
                </div>
                <div className='center-content'>
                    {selected && <RepresentativeDetails extended={extended} clicked={() => setExtended(!extended)} representative={selected} />}
                </div>
                <div>
                    {republicans && <RepresentativeList clicked={clicked} representatives={republicans} />}
                </div>
            </div>
        </RepresentativesWrapper>
    );
}

const RepresentativesWrapper = styled.div`
    /* margin-top: 3rem; */
    width: 100%;
    position: relative;
    .grid-wrapper {
        width: 100%;
        min-height: 80vh;
        display: grid;
        grid-template-columns: 35% 30% 35%;
        justify-content: space-around;
        align-items: space-around;
    }
    .center-content {
        width: 100%;
    }
`;
