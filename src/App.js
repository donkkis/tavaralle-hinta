import React, { useEffect, useState } from 'react'
import { Container, Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import QueryResults from './components/QueryResults'
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
  const [showResults, setShowResults] = useState(false)
  const [query, setQuery] = useState('')
  
  const handleQuerySubmit = async (event) => {
    event.preventDefault()
    setShowResults(true)
    const res = await axios.get(`http://localhost:3002/api/search/${query}`)
    setPhones(res.data)
    setQuery('')
  }
 
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Käytettyjen puhelinten hintatiedot</h1>
            Kokeile esim. hakuja: "Samsung", "Huawei", "iPhone"
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleQuerySubmit}>
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={query} onChange={event => setQuery(event.target.value)} />
            <Button variant="contained" color="primary" type="submit">Search</Button>
            </form>
          </Grid>
            {showResults 
              ? <QueryResults classes={classes} phones={phones} /> 
              : null
            }
          </Grid>
      </Container>
    </div>
  )
}

export default App;

