import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function MeanAirTime({ data, isLoaded }) {
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
        <p>Loading Please wait...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Origin</TableCell>
                <TableCell>Mean air time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.origin}>
                  <TableCell component="th" scope="row">
                    {row.origin}
                  </TableCell>
                  <TableCell>{row.meanAirTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
export default MeanAirTime;

function createData(origin, meanAirTime) {
  return { origin, meanAirTime };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});
