import React from 'react'
import phones from './data/phones.json'
import Summary from './components/Summary'
import Histogram from './components/Histogram'
import Linechart from './components/Linechart'
import { Container, Grid, Paper } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Paper elevation={3}>
              <Summary phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper elevation={3}>
              <Histogram phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper elevation={3}>
              <Linechart phones={phones} />
            </Paper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Paper elevation={3}>
              <Linechart phones={phones} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;

