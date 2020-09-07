import React from 'react'
import { VictoryChart, VictoryHistogram, VictoryVoronoiContainer } from 'victory' 

const Histogram = ({ phones }) => {
    
    const labels = ({ datum }) => (
        `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
    )

    return (
        <div>
            <VictoryChart containerComponent={<VictoryVoronoiContainer labels={labels}/>}>
                <VictoryHistogram data={phones.map(p => ({x : p.price}) )}/>
            </VictoryChart>
        </div>
    )
}

export default Histogram