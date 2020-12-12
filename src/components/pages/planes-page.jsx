import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

import ManufacturesMore200Planes from "../charts/manufactureres-more-200-planes";
import FlightsPer200Manufacturers from "../tables/flights_per_manufacturer";
import PlanesAirbus from "../tables/planes_airbus";

import {
  PLANES_MORE_200,
  PLANES_PER_AIRBUS_MODEL,
  FLIGHTS_PER_MANUFACTURER,
} from "../../helpers/url";
import Loader from "../elements/loader";

function Listing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [planes200, setPlanes200] = useState({});
  const [planesAirbus, setPlanesAirbus] = useState({});
  const [flights, setFlights] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const requestPlanes200 = axios.get(PLANES_MORE_200);
    const requestPlanesAirbus = axios.get(PLANES_PER_AIRBUS_MODEL);
    const requestFlights = axios.get(FLIGHTS_PER_MANUFACTURER);

    axios
      .all([requestPlanes200, requestPlanesAirbus, requestFlights])
      .then(
        axios.spread((...responses) => {
          const responsePlanes200 = responses[0];
          const responsePlanesAirbus = responses[1];
          const responesFlights = responses[2];

          setPlanes200(responsePlanes200.data);
          setPlanesAirbus(responsePlanesAirbus.data);
          setFlights(responesFlights.data);
          setIsLoaded(true);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Grid justify="space-around" container spacing={2}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The manufacturers that have more than 200 planes
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <ManufacturesMore200Planes data={planes200} isLoaded={isLoaded} />
            )}
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The number of flights each manufacturer with more than 200 planes
              are responsible for
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <FlightsPer200Manufacturers data={flights} isLoaded={isLoaded} />
            )}
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Box paddingBottom={2}>
              The number of planes of each Airbus Model
            </Box>
            {!isLoaded ? (
              <Loader />
            ) : (
              <PlanesAirbus data={planesAirbus} isLoaded={isLoaded} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Listing;

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
