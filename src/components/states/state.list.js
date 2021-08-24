import React from 'react';
import StateItem from './state.item';

const StateList = ({ clicked, states }) => {

    return (
        <div>
            {states && states.map(s => {
                return <StateItem but={true} bg='land' key={s.slug} state={s} clicked={clicked} />
            })}
        </div>
    );
}

export default StateList;
