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

    //days since 1-1-1970
    const dateAxis = pricedPhones.map(p => new Date(p.time_stamp).getTime() / 86400000)

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
