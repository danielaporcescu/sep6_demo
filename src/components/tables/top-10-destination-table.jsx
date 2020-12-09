import React, { useEffect, useState, useMemo } from "react";
import ReactTable from "react-table";
import Table from "react-table";
import "react-table/react-table.css";
import classes from "./table.css";

function Top10DestinationsTable({ data, isLoaded }) {
  const [tableData, setTableData] = useState({});

  const columns = useMemo(() => [
    {
      Header: "Destination",
      accessor: "dest",
    },
    {
      Header: "Number of flights",
      accessor: "flightsCount",
    },
  ]);

  useEffect(() => {
    setTableData(data);
  }, [isLoaded]);

  return (
    <div>
      {!isLoaded ? (
        <p>Loading Please wait...</p>
      ) : (
        <ReactTable
          className={classes.ReactTable}
          showPagination={false}
          defaultPageSize={10}
          data={tableData}
          columns={columns}
        />
      )}
    </div>
  );
}

export default Top10DestinationsTable;
