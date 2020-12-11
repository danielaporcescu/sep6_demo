import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";

import WeatherObsOrigins from "../tables/weather-observations-origins";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import JFKDailyMeanTemperature from "../charts/jfk-daily-mean-temp";
import OriginsTemperatureAllValues from "../charts/temp_vals_origins";
import JFKDailyTemperature from "../charts/jfk-daily-temp";
import OriginDailyMeanTemperature from "../charts/origins-daily-mean-temp"

import { WEATHER_OBSERVATION_COUNT_ORIGINS } from "../../helpers/url";
import { JFK_DAILY_MEAN_TEMP } from "../../helpers/url";
import { TEMP_VALUES_ORIGINS } from "../../helpers/url";
import {ORIGINS_DAILY_MEAN_TEMP} from "../../helpers/url"

import Spinner from "../elements/spinner";

// import TotalFlightsPerMonth from "../charts/total-flights-month";
// import TotalFlightsPerMonthFromOrigins from "../charts/total-flights-month-from-origin";
// import TotalFlightsPetMonthFromOriginStacked from "../charts/total-flights-month-from-origin-stacked";
// import TotalFlightsPetMonthFromOriginPercentage from "../charts/total-flights-month-from-origin-percent";
// import TopTenDestinationsPerOrigin from "../charts/top-10-destinations-per-origin";
// import Top10DestinationsTable from "../tables/top-10-destination-table";

function WeatherPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [jfkMeanTemp, setJfkMeanTemp] = useState({});
  const [originsMeanTemp, setOriginsMeanTemp] = useState({});
  const [weatherCount, setWeatherCount] = useState({});
  const [allobsOrigins, setAllObsOrigins] = useState({});

  const classes = useStyles();

  //FOR JFKDailyMeanTemperature
  const getJfkMeanTemp = () => {
    axios
      .get(JFK_DAILY_MEAN_TEMP)
      .then((res) => {
        setJfkMeanTemp(res.data);
        // console.log(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };

  //FOR WeatherObsCount
  const getWeatherCount = () => {
    axios
      .get(WEATHER_OBSERVATION_COUNT_ORIGINS)
      .then((res) => {
        setWeatherCount(res.data);
        console.log(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };

  //FOR WeatherObsOrigins
  const getObsOrigins = () => {
    axios
      .get(TEMP_VALUES_ORIGINS)
      .then((res) => {
        setAllObsOrigins(res.data);
        console.log(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };

  //FOR Origin daily mean temp
  const getOriginsMeanTemp = () => {
    axios
      .get(ORIGINS_DAILY_MEAN_TEMP)
      .then((res) => {
        setOriginsMeanTemp(res.data);
        console.log(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(true);
      });
  };


  useEffect(() => {
    // getWeatherCount();
    // getJfkMeanTemp();
    // getObsOrigins();
    getOriginsMeanTemp();
  }, [isLoaded]);

  return (
    <div className={classes.root}>
      {/* <Box width={300}>  */}
      {/* <Grid item xs={6}> */}
      {/* How many weather observations there are for the origins in a table */}
      {/* <div>
        {!isLoaded ? (
          <p>Loading Please wait...</p>
        ) : (
          <WeatherObsOrigins data={weatherCount} isLoaded={isLoaded} />
        )}
      </div> */}
      {/* The daily mean temperature (in Celsius) at JFK */}
      {/* <div>
        {!isLoaded ? (
          <p>Loading Please wait...</p>
        ) : (
          <JFKDailyMeanTemperature data={jfkMeanTemp} isLoaded={isLoaded} />
        )}
      </div> */}
      {/* </Grid> */}
      {/* For each of the three origins, all temperature attributes */}
      {/* <div>
        {!isLoaded ? (
          <Spinner />
        ) : (
          <OriginsTemperatureAllValues
            data={allobsOrigins}
            isLoaded={isLoaded}
          />
        )}
      </div> */}
      {/* The temperature (in Celsius) at JFK.
      <div>
        {!isLoaded ? (
          <Spinner />
        ) : (
          <JFKDailyTemperature
            data={allobsOrigins.jfkValues}
            isLoaded={isLoaded}
          />
        )}
      </div> */}
      The daily mean temperature (in Celsius) for each origin in the same plot
      <div>
        {!isLoaded ? (
          <Spinner />
        ) : (
          <OriginDailyMeanTemperature
            data={originsMeanTemp}
            isLoaded={isLoaded}
          />
        )}
      </div>
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
