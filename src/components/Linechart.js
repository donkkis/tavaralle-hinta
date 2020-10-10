import React from 'react'
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryAxis } from 'victory'
import zip from 'lodash.zip'

const labels = ({ datum }) => (
    `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
)

const Linechart = ({ phones }) => {
    if (!phones) {
        return <div>Loading...</div>
    }
    const pricedPhones = phones.filter(p => p.price)
    const dateAxis = pricedPhones.map(p => {
        const dd = p.time_stamp.slice(0, 2)
        const MM = p.time_stamp.slice(3, 5)
        const yyyy = p.time_stamp.slice(6, 10)
        const HH = p.time_stamp.slice(11, 13)
        const mm = p.time_stamp.slice(14)
        return new Date(yyyy, MM-1, dd, HH, mm)
    })

    const prices = pricedPhones.map(p => p.price)
    const data = zip(dateAxis, prices).map(dp => ({x: dp[0], y: dp[1] }))

    return (
        <div>
            <VictoryChart scale={{ x: "time"}} containerComponent={<VictoryVoronoiContainer labels={labels}/>}>
                <VictoryAxis />
                <VictoryLine data={data}/>
            </VictoryChart>
        </div>
    )
}

export default Linechart