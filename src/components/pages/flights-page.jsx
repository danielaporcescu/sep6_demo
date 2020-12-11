import React, { useEffect, useState } from "react";
import axios from "axios";

import { FLIGHTS_CHART_DATA } from "../../helpers/url";

import TotalFlightsPerMonth from "../charts/total-flights-month";
import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";
import Top10DestinationsTable from "../tables/top-10-destination-table";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import MeanAirTime from "../tables/mean-airtime";

import Loader from "../elements/loader";

import { makeStyles } from "@material-ui/core/styles";

function FlightsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const classes = useStyles();

  const getFlights = () => {
    axios
      .get(FLIGHTS_CHART_DATA)
      .then((res) => {
        setResult(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getFlights();
  }, [isLoaded]);

  return (
    <div className={classes.root}>
      <Grid justify="space-around" container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            The mean airtime of each of the origins in a table
            <MeanAirTime data={result.meanAirTime} isLoaded={isLoaded} />
          </Paper>
          <Paper className={classes.paper}>
            The top-10 destinations and how many flights were made to these
            <Top10DestinationsTable
              data={result.topTenDestinationsByFlights}
              isLoaded={isLoaded}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
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
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));
