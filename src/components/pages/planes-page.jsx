import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

import ManufacturesMore200Planes from "../charts/manufactureres-more-200-planes";

import {
  PLANES_MORE_200,
  PLANES_PER_AIRBUS_MODEL,
  FLIGHTS_PER_MANUFACTURER,
} from "../../helpers/url";
import Loader from "../elements/loader";

function Listing() {
  let one =
    "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
  let two =
    "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
  let three =
    "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";

  useEffect(() => {
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];

          // use/access the results
          console.log(responseOne, responseTwo, responesThree);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
  });

  return <div></div>;
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
