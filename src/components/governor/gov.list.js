import React from 'react';
import Governor from './gov';

const GovernorList = ({ clicked, governors }) => {

    return (
        <div>
            {governors && governors.map(g => {
                return <Governor key={g.twitter_handle} governor={g} clicked={clicked} />
            })}
        </div>
    );
}

export default GovernorList;
