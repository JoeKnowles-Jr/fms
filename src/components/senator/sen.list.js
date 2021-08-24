import React from 'react'
import Senator from './sen'

const SenatorList = ({ clicked, senators }) => {
    
    return (
        <div>
            {senators && senators.map(s => {
                return <Senator key={s.bioguide} senator={s} clicked={clicked} />
            })}
        </div>
    )
}

export default SenatorList
