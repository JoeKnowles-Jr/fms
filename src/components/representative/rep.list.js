import React from 'react';
import Representative from './rep';

const RepresentativeList = ({ clicked, representatives }) => {

    return (
        <div>
            {representatives && representatives.map(r => {
                return <Representative key={r.bioguide} representative={r} clicked={clicked} />
            })}
        </div>
    );
}

export default RepresentativeList;
