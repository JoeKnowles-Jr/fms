import React from 'react';
import styled from 'styled-components';
import GovernorList from './gov.list';
import GovernorDetails from './gov.details';

export const GovernorPage = ({ democrats, republicans }) => {
    const [selected, setSelected] = React.useState(null)

    const clicked = (governor) => {
        setSelected(governor)
        window.scrollTo(0, 0)
    }

    return (
        <GovernorPageWrapper>
            <div className='grid-wrapper'>
                <div>
                    {democrats && <GovernorList clicked={clicked} governors={democrats} />}
                </div>
                <div className='center-content'>
                    {selected && <GovernorDetails governor={selected} />}
                </div>
                <div>
                    {republicans && <GovernorList clicked={clicked} governors={republicans} />}
                </div>
            </div>
        </GovernorPageWrapper>
    );
}

const GovernorPageWrapper = styled.div`
    /* margin-top: 3rem; */
    width: 100%;
    position: relative;
    .grid-wrapper {
        width: 100%;
        min-height: 80vh;
        display: grid;
        grid-template-columns: 35% 30% 35%;
    }
    .center-content {
        width: 100%;
    }
`;

export default GovernorPage;
