import React from 'react'
import phones from './data/phones.json'
import ListView from './components/ListView'
import Summary from './components/Summary'
import Histogram from './components/Histogram'
import Linechart from './components/Linechart'

const App = () => {
  return (
    <div>
      <Summary phones={phones} />
      <Histogram phones={phones} />
      <Linechart phones={phones} />
      <ListView phones={phones} />
    </div>
  )
}

export default App;

