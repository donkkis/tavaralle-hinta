import React from 'react'
import { VictoryChart, VictoryLine, VictoryVoronoiContainer } from 'victory'

const labels = ({ datum }) => (
    `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
)

const Linechart = ({ phones }) => {
    return (
        <div>
            <VictoryChart containerComponent={<VictoryVoronoiContainer labels={labels}/>}>
                <VictoryLine data={phones.map(p => ({x: p.time_stamp, y: p.price }) )}/>
            </VictoryChart>
        </div>
    )
}

export default Linechart