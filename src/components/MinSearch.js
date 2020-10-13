import React from 'react'
import '../Styles.css'
import { Grid, Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'

const MinSearch = ({ query, setQuery, fetchPhones }) => {
  return (
    <Grid item xs={12} align='center'>
        <div className='search__input__inline'>
          <InputBase
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
        <span className='search__buttons__inline'>
          <Button id="search-button" variant="contained" color="primary" type="submit" onClick={fetchPhones}>Search</Button>
        </span>
    </Grid>

  )
}

export default MinSearch