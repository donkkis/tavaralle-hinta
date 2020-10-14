import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QueryResults from './QueryResults'
import { Container, Grid } from '@material-ui/core'
import MinSearch from './MinSearch'


const Search = ({ query, setQuery, classes }) => {
  const [phones, setPhones] = useState(null)
  const fetchPhones = async (event) => {
    if (event) {
      event.preventDefault()
    }
    const res = await axios.get(`http://localhost:3002/api/search/${query}`)
    setPhones(res.data)
    //setQuery('')
  }

  useEffect(() => {
    fetchPhones()
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        <MinSearch query={query} setQuery={setQuery} phones={phones} fetchPhones={fetchPhones}/>
        <QueryResults phones={phones} classes={classes} />
      </Grid>
    </Container>
  )
}

export default Search