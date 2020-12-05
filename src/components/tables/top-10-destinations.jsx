// import { FLIGHTS_TOP10_DESTINATIONS } from "../../helpers/url";

// import React, { useState, useEffect } from "react";
// import classes from "./table.module.css";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// import axios from "axios";


// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// //   createData("Eclair", 262, 16.0, 24, 6.0),
// //   createData("Cupcake", 305, 3.7, 67, 4.3),
// //   createData("Gingerbread", 356, 16.0, 49, 3.9),
// // ];

// export default function BasicTable() {
// const [tableData, setTableData] = useState({});

// const tableValues =() =>
// {
//     let destinations = [];
//     let flights = [];


// axios
// .get(FLIGHTS_TOP10_DESTINATIONS)
// .then((res) => {
//   for (const dataObj of res.data) {
//     destinations.push(dataObj.dest);
//     flights.push(parseInt(dataObj.flightsCount));
//   }
//   setTableData({

//   })
// })
// .catch((err) => {
//     console.log(err);
//   });
// }

// useEffect(() => {
//     tableValues();
//   }, []);
  
//   return (
//     <div className={classes.Table}>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Destination</TableCell>
//               <TableCell align="right">Flights</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {destinations.map((row) => (
//               <TableRow key={destinations}>
//                 <TableCell component="th" scope="row">
//                   {destinations}
//                 </TableCell>
//                 <TableCell align="right">{flights}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
