import React, { useEffect, useState, useMemo } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Spinner from "../elements/spinner";

import { useStyles, StyledTableCell, StyledTableRow } from "./table-styles";

function WeatherObsOrigins({ data, isLoaded }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let rows = [];
    if (data !== undefined) {
      rows = [
        createData("EWR", data.ewr),
        createData("JFK", data.jfk),
        createData("LGA", data.lga),
      ];
      setTableData(rows);
    }
  }, [isLoaded]);

  const classes = useStyles();

  return (
    <div>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Origin</StyledTableCell>
                <StyledTableCell align="center">
                  Weather observations
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.origin}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.origin}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.weatherObs}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default WeatherObsOrigins;

function createData(origin, weatherObs) {
  return { origin, weatherObs };
}
