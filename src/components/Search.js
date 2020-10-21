import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QueryResults from './QueryResults'
import { Container, Grid } from '@material-ui/core'
import MinSearch from './MinSearch'
import { useHistory, useParams } from 'react-router-dom'

const Search = ({ query, setQuery, classes }) => {
  const [phones, setPhones] = useState(null)
  const history = useHistory()
  const execQuery = useParams().query

  const fetchPhones = async (event) => {
    //console.log(history)
    if (event) {
      event.preventDefault()
    }
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/search/${execQuery}`)
    setPhones(res.data)
  }

  useEffect(() => {
    //console.log('fetching')
    fetchPhones()
    setQuery(execQuery)
  }, [execQuery])

  return (
    <Container>
      <Grid container spacing={3}>
        <MinSearch query={query} setQuery={setQuery} phones={phones} fetchPhones={fetchPhones}/>
        <QueryResults execQuery={execQuery} phones={phones} classes={classes} />
      </Grid>
    </Container>
  )
}

export default Search