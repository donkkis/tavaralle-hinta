import React from 'react'
import { VictoryChart, VictoryTheme, VictoryScatter } from 'victory'
import zip from 'lodash.zip'

const ScatterPlot = ({ phones }) => {

    if (!phones) {
        return <div>Loading...</div>
    }

    const subtractVectors = (a,b) => {
        return a.map((e,i) => e - b[i]);
    }

    const dateAxis = phones.map(p => {
        const dd = p.time_stamp.slice(0, 2)
        const MM = p.time_stamp.slice(3, 5)
        const yyyy = p.time_stamp.slice(6, 10)
        const HH = p.time_stamp.slice(11, 13)
        const mm = p.time_stamp.slice(14)
        //days since 1-1-1970
        return new Date(yyyy, MM-1, dd, HH, mm).getTime() / 86400000
    })

    const now = new Array(dateAxis.length).fill(new Date().getTime() / 86400000)
    //time diff in days
    const listingAge = subtractVectors(now, dateAxis)
    const prices = phones.map(p => p.price)

    const data = zip(listingAge, prices).map(dp => ({x: dp[0], y: dp[1] }))
    
    return <VictoryChart
        theme={VictoryTheme.material}
     >
    <VictoryScatter
      style={{ data: { fill: "#c43a31" } }}
      size={1}
      data={data}
    />
  </VictoryChart>
}

export default ScatterPlot
