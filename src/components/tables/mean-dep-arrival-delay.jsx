import React, { useEffect, useState, useMemo } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Loader from "../elements/loader";

import { useStyles, StyledTableCell, StyledTableRow } from "./table-styles";
import { Box } from "@material-ui/core";

function MeanDepArrDelay({ data, isLoaded }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let rows = [];
    if (data !== undefined) {
      rows = [
        createData("EWR", data.ewrDepartureDelay.toFixed(2), data.ewrArrivalDelay.toFixed(2)),
        createData("JFK", data.jfkDepartureDelay.toFixed(2), data.jfkArrivalDelay.toFixed(2)),
        createData("LGA", data.lgaDepartureDelay.toFixed(2), data.lgaArrivalDelay.toFixed(2)),
      ];
      setTableData(rows);
    }
  }, [isLoaded]);

  const classes = useStyles();

  return (
    <div>
      {!isLoaded ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Origin</StyledTableCell>
                <StyledTableCell align="center">
                  Departure Delay
                </StyledTableCell>
                <StyledTableCell align="center">ArrivalDelay</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.origin}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.origin}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.depDelay}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.arrDelay}
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
export default MeanDepArrDelay;

function createData(origin, depDelay, arrDelay) {
  return { origin, depDelay, arrDelay };
}
