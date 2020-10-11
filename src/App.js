import React, { useEffect, useState } from 'react'
import { Container, Grid, Button, TextField } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles'
import QueryResults from './components/QueryResults'
import axios from 'axios';
import './Styles.css'

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
    <div className='home__body'>
      <Container>
        <Grid container spacing={3}>
          <Grid item id="search-label" xs={12} align='center'>
            <h1>Käytettyjen puhelinten hintatiedot</h1>
            Kokeile esim. hakuja: "Samsung", "Huawei", "iPhone"
          </Grid>
          <Grid item xs={12} align='center'>
            <form onSubmit={handleQuerySubmit}>
            <div className='search__input'>
              <InputBase 
                id="outlined-search" 
                label="Search" 
                type="search" 
                variant="outlined" 
                fullWidth
                value={query} 
                onChange={event => setQuery(event.target.value)} 
              />
            </div>
            <br />
            <div className='search__buttons'>
              <Button id="search-button" variant="contained" color="primary" type="submit">Search</Button>
              <Button id="some-button" variant="contained" color="primary">UselessFeature</Button>
            </div>
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

