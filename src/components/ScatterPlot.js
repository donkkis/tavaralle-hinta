import React from 'react'
import { VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis, VictoryLabel } from 'victory'
import zip from 'lodash.zip'

const ScatterPlot = ({ phones }) => {
    if (!phones) {
        return <div>Loading...</div>
    }
    const pricedPhones = phones.filter(p => p.price)

    const subtractVectors = (a,b) => {
        return a.map((e,i) => e - b[i]);
    }

    const dateAxis = pricedPhones.map(p => {
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
    const prices = pricedPhones.map(p => p.price)

    const data = zip(listingAge, prices).map(dp => ({x: dp[0], y: dp[1] }))
    
    return <VictoryChart
        theme={VictoryTheme.material}
        height={250}
     >
      <VictoryAxis 
        label='Listing age (d)'
        axisLabelComponent={<VictoryLabel dy={25} />}
      />
      <VictoryAxis dependentAxis /> 

      <VictoryScatter
        size={2}
        data={data}

      />
  </VictoryChart>
}

export default ScatterPlot
