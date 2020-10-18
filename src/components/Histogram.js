import React from 'react'
import { VictoryChart, VictoryHistogram, VictoryVoronoiContainer, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory' 

const Histogram = ({ phones }) => {

    if (!phones) {
        return <div>Loading...</div>
    }
    
    const labels = ({ datum }) => (
        `${Math.round(datum.x, 2)}, ${Math.round(datum.y, 2)}`
    )

    return (
        <div>
            <VictoryChart 
                containerComponent={<VictoryVoronoiContainer labels={labels}/>}
                theme={VictoryTheme.material}
                height={250}
                animate={{
                    duration: 1500
                  }}
            >
                <VictoryAxis label='Price (eur)' axisLabelComponent={<VictoryLabel dy={25} />}/>
                <VictoryAxis dependentAxis />
                <VictoryHistogram data={phones.map(p => ({x : p.price}) )}/>
            </VictoryChart>
        </div>
    )
}

export default Histogram