import React, { useEffect, useState } from "react";

import { useStyles, StyledTableCell, StyledTableRow } from "./table-styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Loader from "../elements/loader";


function Top10DestinationsTable({ data, isLoaded }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let rows = [];
    if (data !== undefined) {
      for (let index of data) {
        rows.push(createData(index.dest, index.flightsCount));
      }
      setTableData(rows);
    }
  }, [isLoaded, data]);

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
                <StyledTableCell align="center">Destination</StyledTableCell>
                <StyledTableCell align="center">
                  Number of flights
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.destination}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.destination}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.flightsCount}
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

export default Top10DestinationsTable;

function createData(destination, flightsCount) {
  return { destination, flightsCount };
}
