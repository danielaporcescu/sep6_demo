import React, { useEffect, useState, useMemo } from "react";
import Table from "react-table";
import "react-table/react-table.css";
import classes from "./table.module.css";

function MeanAirTime({ data, isLoaded }) {
  const [tableData, setTableData] = useState({});

  const columns = useMemo(() => [
    {
      Header: "EWR",
      accessor: "ewr",
    },
    {
      Header: "JFK",
      accessor: "jfk",
    },
    {
      Header: "LGA",
      accessor: "lga",
    }
  ]);

  useEffect(() => {
    setTableData(data);
  }, [isLoaded]);

  return (
    <div className={classes.Table}>
      {!isLoaded ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table
          showPagination={false}
          defaultPageSize={10}
          data={tableData}
          columns={columns}
        />
      )}
    </div>
  );
}

export default MeanAirTime;
