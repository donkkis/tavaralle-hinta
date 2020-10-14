import React, { useEffect } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'
import '../Styles.css'

const Home = ({ query, setQuery, classes }) => {

  useEffect(() => {
    setQuery('')
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
                <Link to='/search'>
                  <Button id="search-button" variant="contained" color="primary" type="submit">Search</Button>
                </Link>
                <Button id="some-button" variant="contained" color="primary" onClick={() => alert('Move along, nothing to see here.')}>UselessFeature</Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;
