import React, { useEffect, useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import '../Styles.css'
import axios from 'axios'

const Home = ({ query, setQuery, classes }) => {
  const [listingCount, setListingCount] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)

  const fetchMeta = async (event) => {
    const count = await axios.get('http://localhost:3002/api/count')
    const lastUD = await axios.get('http://localhost:3002/api/lastinsert')
    setListingCount(count.data)
    setLastUpdate(lastUD.data)
  }

  useEffect(() => {
    setQuery('')
    fetchMeta()
  }, [])

  return (
    <div className='home__body'>
      <Container>
        <Grid container spacing={3}>
          <Grid item id="search-label" xs={12} align='center'>
            <h1>Käytettyjen puhelinten hintatiedot</h1>
            Kokeile esim. hakuja: "Samsung", "Huawei", "iPhone"
          </Grid>
          <Grid item xs={12} align='center'>
            <form>
              <div className='search__input'>
                <SearchIcon />
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
                <Link to={`/search/${query}`} style={{ textDecoration: 'none'}}>
                  <Button id="search-button" variant="contained" color="primary" type="submit">Search</Button>
                </Link>
                <Button id="some-button" variant="contained" color="primary" onClick={() => alert('Move along, nothing to see here.')}>UselessFeature</Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} align='center'>
            {
              (listingCount && lastUpdate) &&
              <>Tietokannassa {listingCount} kohdetta, päivitetty viimeksi: {lastUpdate.created}</>
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;
