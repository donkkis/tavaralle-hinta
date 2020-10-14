import React from 'react'
import { VictoryChart, VictoryHistogram, VictoryVoronoiContainer, VictoryAxis } from 'victory' 

const Histogram = ({ phones }) => {

    if (!phones) {
        return <div>Loading...</div>
    }
    
    const labels = ({ datum }) => (
        `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
    )

    return (
        <div>
            <VictoryChart containerComponent={<VictoryVoronoiContainer labels={labels}/>}>
                <VictoryAxis label='Price (eur)'/>
                <VictoryAxis dependentAxis />
                <VictoryHistogram data={phones.map(p => ({x : p.price}) )}/>
            </VictoryChart>
        </div>
    )
}

export default Histogram