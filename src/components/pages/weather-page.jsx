import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import JFKDailyMeanTemperature from "../charts/jfk-daily-mean-temp";
import OriginsTemperatureAllValues from "../charts/temp_vals_origins";
import JFKDailyTemperature from "../charts/jfk-daily-temp";
import OriginDailyMeanTemperature from "../charts/origins-daily-mean-temp";
import WeatherObsOrigins from "../tables/weather-observations-origins";

import { WEATHER_DATA } from "../../helpers/url";
import Loader from "../elements/loader";

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState({});

  const classes = useStyles();

  const getWeatherData = () => {
    axios
      .get(WEATHER_DATA)
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
    getWeatherData();
  }, [isLoaded]);

  return (
    <div className={classes.root}>
      <Grid justify="space-around" container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            How many weather observations there are for the origins in a table
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
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            The daily mean temperature (in Celsius) at JFK
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            For each of the three origins, all temperature attributes
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            The temperature (in Celsius) at JFK.
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
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            The daily mean temperature (in Celsius) for each origin in the same
            plot
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
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));
