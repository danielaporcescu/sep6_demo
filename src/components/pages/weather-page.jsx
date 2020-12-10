import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";

import { WEATHER_OBSERVATION_COUNT_ORIGINS } from "../../helpers/url";

import WeatherObsOrigins from "../tables/weather-observations-origins";
import TempAtributesOrigins from "../charts/temperature-atributes-origins";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Example from "../charts/jfk-daily-mean-temp";
import { JFK_DAILY_MEAN_TEMP } from "../../helpers/url";


// import TotalFlightsPerMonth from "../charts/total-flights-month";
// import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
// import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
// import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
// import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";
// import Top10DestinationsTable from "../tables/top-10-destination-table";

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const classes = useStyles();

  const getFlights = () => {
    axios
      .get(JFK_DAILY_MEAN_TEMP)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
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
      {/* <Box width={300}>  */}
      <Grid item xs={6}>
        How many weather observations there are for the origins in a table
        {/* <WeatherObsOrigins data={result} isLoaded={isLoaded} /> */}
        <Example data={result} isLoaded={isLoaded}  />
      </Grid>
      {/* </Box> */}
    </div>
  );
}

export default WeatherPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
