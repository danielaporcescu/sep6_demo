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
      <Grid item xs={6}>
        How many weather observations there are for the origins in a table
        <div>
          {!isLoaded ? (
            <Loader />
          ) : (
            <WeatherObsOrigins
              data={result.weatherObservationsOrigin}
              isLoaded={isLoaded}
            />
          )}
        </div>
        The daily mean temperature (in Celsius) at JFK
        <div>
          {!isLoaded ? (
            <Loader />
          ) : (
            <JFKDailyMeanTemperature
              data={result.dailyMeanTemperatureJFK}
              isLoaded={isLoaded}
            />
          )}
        </div>
      </Grid>
      For each of the three origins, all temperature attributes
      <div>
        {!isLoaded ? (
          <Loader />
        ) : (
          <OriginsTemperatureAllValues
            data={result.valuesForOrigins}
            isLoaded={isLoaded}
          />
        )}
      </div>
      The temperature (in Celsius) at JFK.
      <div>
        {!isLoaded ? (
          <Loader />
        ) : (
          <JFKDailyTemperature
            data={result.valuesForOrigins.jfkValues}
            isLoaded={isLoaded}
          />
        )}
      </div>
      The daily mean temperature (in Celsius) for each origin in the same plot
      <div>
        {!isLoaded ? (
          <Loader />
        ) : (
          <OriginDailyMeanTemperature
            data={result.dailyMeanTemperatureOrigins}
            isLoaded={isLoaded}
          />
        )}
      </div>
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
