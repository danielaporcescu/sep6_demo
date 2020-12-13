import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

import JFKDailyMeanTemperature from "../charts/jfk-daily-mean-temp";
import OriginsTemperatureAllValues from "../charts/temp_vals_origins";
import JFKDailyTemperature from "../charts/jfk-daily-temp";
import OriginDailyMeanTemperature from "../charts/origins-daily-mean-temp";
import WeatherObsOrigins from "../tables/weather-observations-origins";

import { getWeatherData } from "../services/flights-service";

import Loader from "../elements/loader";

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const classes = useStyles();

  useEffect(() => {
    getWeatherData()
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
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              How many weather observations there are for the origins in a table
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <WeatherObsOrigins
                data={result.weatherObservationsOrigin}
                isLoaded={isLoaded}
              />
            )}
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The daily mean temperature (in Celsius) at JFK
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <JFKDailyMeanTemperature
                data={result.dailyMeanTemperatureJFK}
                isLoaded={isLoaded}
              />
            )}
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              For each of the three origins, all temperature attributes
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <OriginsTemperatureAllValues
                data={result.valuesForOrigins}
                isLoaded={isLoaded}
              />
            )}
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>The temperature (in Celsius) at JFK.</Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <JFKDailyTemperature
                data={result.valuesForOrigins.jfkValues}
                isLoaded={isLoaded}
              />
            )}
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The daily mean temperature (in Celsius) for each origin in the
              same plot
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <OriginDailyMeanTemperature
                data={result.dailyMeanTemperatureOrigins}
                isLoaded={isLoaded}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WeatherPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: "#202a3b",
    color: "#fefeff",
  },
}));
