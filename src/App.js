import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => { 
  return (
    <Router>
    <Switch>
      <Route path="/search">
        <Home />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

