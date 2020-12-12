import React, { useEffect, useState } from "react";

import { useStyles, StyledTableCell, StyledTableRow } from "./table-styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Loader from "../elements/loader";

function PlanesAirbus({ data, isLoaded }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let rows = [];
    if (data !== undefined) {
      for (let index of data) {
        rows.push(createData(index.manufacturer, index.model, index.count));
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
                <StyledTableCell align="center">Manufacturer</StyledTableCell>
                <StyledTableCell align="center">Model</StyledTableCell>
                <StyledTableCell align="center">
                  Number of planes
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.model}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.manufacturer}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.model}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.count}
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

export default PlanesAirbus;

function createData(manufacturer, model, count) {
  return { manufacturer, model, count };
}
