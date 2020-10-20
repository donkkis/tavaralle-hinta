import React from 'react'
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory'
import zip from 'lodash.zip'

const labels = ({ datum }) => (
    `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
)

const Linechart = ({ phones }) => {
    if (!phones) {
        return <div>Loading...</div>
    }
    const pricedPhones = phones.filter(p => p.price)
    const dateAxis = pricedPhones.map(p => new Date(p.time_stamp))

    const prices = pricedPhones.map(p => p.price)
    const data = zip(dateAxis, prices).map(dp => ({x: dp[0], y: dp[1] }))

    return (
        <div>
            <VictoryChart 
                scale={{ x: "time"}} 
                containerComponent={<VictoryVoronoiContainer labels={labels}/>}
                theme={VictoryTheme.material}
                height={250}
                animate={{
                    duration: 1500
                  }}
            >
                <VictoryAxis label='Listing date' axisLabelComponent={<VictoryLabel dy={25} />}/>
                <VictoryAxis dependentAxis />
                <VictoryLine data={data}/>
            </VictoryChart>
        </div>
    )
}

export default Linechart