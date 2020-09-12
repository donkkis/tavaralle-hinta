import React, { useEffect, useState } from 'react'
import Summary from './components/Summary'
import Histogram from './components/Histogram'
import Linechart from './components/Linechart'
import ScatterPlot from './components/ScatterPlot'
import { Container, Grid, Paper, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';

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
}));


const App = () => {
  const classes = useStyles();
  const [phones, setPhones] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/listings')
      setPhones(res.data)
    }
    fetchData()
  }, [])
  
  const handleQuerySubmit = async (event) => {
    event.preventDefault()
    const res = await axios.get(`http://localhost:3001/listings?q=${query}`)
    console.log(res.data)
    setPhones(res.data)
    setQuery('')
  }
 
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form onSubmit={handleQuerySubmit}>
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={query} onChange={event => setQuery(event.target.value)} />
            <Button variant="contained" color="primary" type="submit">Search</Button>
            </form>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <Summary phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <Histogram phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <Linechart phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <ScatterPlot phones={phones} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;

