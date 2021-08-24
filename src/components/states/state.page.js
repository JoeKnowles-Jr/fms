import React from 'react';
import styled from 'styled-components';
import StateDetails from '../../components/states/state.details'
import StateList from '../../components/states/state.list'

export const StatesPage = ({ states }) => {
    const [selected, setSelected] = React.useState(null)

    React.useEffect(() => {
        states && setSelected(states[0])
    }, [states])

    const clicked = (state) => {
        setSelected(state)
        window.scrollTo(0, 0)
    }

    return (
        <StatesWrapper>
            <GridWrapper>
                <div>
                    {states && <StateList clicked={clicked} states={states} />}
                </div>
                <div>
                    <StateDetails state={selected} />
                </div>
            </GridWrapper>
        </StatesWrapper>
    );

}

const GridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
`;

const StatesWrapper = styled.div`
    width: 100%;
    position: relative;
`;
