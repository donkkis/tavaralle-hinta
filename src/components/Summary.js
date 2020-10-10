import React from 'react'
import meanBy from 'lodash.meanby'

const summaryStyle = {
}

const Summary = ({ phones }) => {

    if (!phones) {
        return <div>Loading...</div>
    }
    return (
        <div style={summaryStyle}>
            <p>Count: {phones.length}</p>
            <p>Mean Price: {meanBy(phones, 'price')}</p>
            <p>Min Price: {Math.min( ...phones.filter(p => p.price).map(p => p.price) )}</p>
            <p>Max Price: {Math.max( ...phones.filter(p => p.price).map(p => p.price) )}</p>
        </div>
    )
}

export default Summary