import React from 'react'
import meanBy from 'lodash.meanby'

const summaryStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
}

const Summary = React.memo(({ phones, execQuery }) => {
    if (!phones) {
        return <div>Loading...</div>
    }
    return (
        <div style={summaryStyle}>
            <h3>Summary: {execQuery} </h3>
            { phones.length >= 250
                ? <p>Count: {phones.length}+</p>
                : <p>Count: {phones.length}</p>
            }
            <p>Mean Price: {meanBy(phones, 'price')}</p>
            <p>Min Price: {Math.min( ...phones.filter(p => p.price).map(p => p.price) )}</p>
            <p>Max Price: {Math.max( ...phones.filter(p => p.price).map(p => p.price) )}</p>
        </div>
    )
})

export default Summary