import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Search from './components/Search'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90%'
  },
  searchbar: {
    align: 'center'
  }
}));

const App = () => {
  const [query, setQuery] = useState('')
  const classes = useStyles();

  return (
    <Router>
    <Switch>
      <Route path="/search">
        <Search query={query} setQuery={setQuery} classes={classes} />
      </Route>

      <Route path="/">
        <Home query={query} setQuery={setQuery} classes={classes} />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

