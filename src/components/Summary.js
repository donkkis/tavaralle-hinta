import React from 'react'
import meanBy from 'lodash.meanby'

const Summary = ({ phones }) => {
    console.log(phones.map(p => p.price))
    return (
        <div>
            <p>Mean Price: {meanBy(phones, 'price')}</p>
            <p>Min Price: {Math.min( ...phones.map(p => p.price) )}</p>
            <p>Max Price: {Math.max( ...phones.map(p => p.price) )}</p>
        </div>
    )
}

export default Summary