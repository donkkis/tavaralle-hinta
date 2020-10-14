import React from 'react'
import Summary from './Summary'
import Histogram from './Histogram'
import Linechart from './Linechart'
import ScatterPlot from './ScatterPlot'
import { Grid, Paper, CircularProgress } from '@material-ui/core'

const QueryResults = React.memo(({ classes, phones }) => {
  if (!phones) {
    return <>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </>
  }
  return (
    <>
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
    </>
  )
})

export default QueryResults
