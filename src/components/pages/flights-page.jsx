import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

import TotalFlightsPerMonth from "../charts/total-flights-month";
import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";
import Top10DestinationsTable from "../tables/top-10-destination-table";
import MeanAirTime from "../tables/mean-airtime";
import MeanDepArrDelay from "../tables/mean-dep-arrival-delay";

import { getFlightsData } from "../services/flights-service";

function FlightsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const classes = useStyles();

  useEffect(() => {
    getFlightsData()
      .then((res) => {
        setResult(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
      });
  }, [isLoaded]);

  return (
    <div className={classes.root}>
      <Grid justify="space-around" container spacing={2}>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The mean airtime of each of the origins in a table
            </Box>
            <MeanAirTime data={result.meanAirTime} isLoaded={isLoaded} />
          </Paper>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The top-10 destinations and how many flights were made to these
            </Box>
            <Top10DestinationsTable
              data={result.topTenDestinationsByFlights}
              isLoaded={isLoaded}
            />
          </Paper>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              Mean departure and arrival delay for each origin in a table
            </Box>
            <MeanDepArrDelay data={result.originDelays} isLoaded={isLoaded} />
          </Paper>
        </Grid>
        <Grid item md={8}>
          <Paper className={classes.paper}>
            <TotalFlightsPerMonth
              data={result.flightsPerMonth}
              isLoaded={isLoaded}
            />
          </Paper>
          <Paper className={classes.paper}>
            <TotalFlightsPerMonthFromOrigins
              data={result.flightsPerMonthFromOrigins}
              isLoaded={isLoaded}
            />
          </Paper>
          <Paper className={classes.paper}>
            <TotalFlightsPetMonthFromOriginStacked
              data={result.flightsPerMonthFromOrigins}
              isLoaded={isLoaded}
            />
          </Paper>
          <Paper className={classes.paper}>
            <TotalFlightsPetMonthFromOriginPercentage
              data={result.flightsPerMonthFromOriginPercentage}
              isLoaded={isLoaded}
            />
          </Paper>
          <Paper className={classes.paper}>
            <TopTenDestinationsPerOrigin
              data={result.topTenDestinationsByFlightsFromOrigins}
              isLoaded={isLoaded}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default FlightsPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: "#202a3b",
    color: "#fefeff",
  },
}));
