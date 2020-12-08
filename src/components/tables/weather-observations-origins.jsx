// import React, { useEffect, useState, useMemo } from "react";
// import Table from "react-table";
// import "react-table/react-table.css";
// import classes from "./table.module.css";

// function WeatherObservationsPerOrigins({ data, isLoaded }) {
//   const [tableData, setTableData] = useState({});

//   const columns = useMemo(() => [
//     {
//       Header: "Destination",
//       accessor: "dest",
//     },
//     {
//       Header: "Number of flights",
//       accessor: "flightsCount",
//     },
//   ]);

//   useEffect(() => {
//     setTableData(data);
//   }, [isLoaded]);

//   return (
//     <div className={classes.Table}>
//       {!isLoaded ? (
//         <p>Loading Please wait...</p>
//       ) : (
//         <Table
//           showPagination={false}
//           defaultPageSize={10}
//           data={tableData}
//           columns={columns}
//         />
//       )}
//     </div>
//   );
// }

// export default WeatherObservationsPerOrigins;
