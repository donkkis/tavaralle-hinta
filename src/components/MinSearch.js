import React from 'react'
import '../Styles.css'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';

const MinSearch = ({ query, setQuery, fetchPhones, phones }) => {
  return (
    <Grid item xs={12} align='left'>
        <form onSubmit={fetchPhones}>
        <span className='search__input__inline'>
          <InputBase
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </span>
        <span className='search__buttons__inline'>
          <Link to={`/search/${query}`} style={{ textDecoration: 'none'}}>
            <Button id="search-button" variant="contained" color="primary" type="submit">Search</Button>
          </Link>
        </span>
        </form>
    </Grid>

  )
}

export default MinSearch