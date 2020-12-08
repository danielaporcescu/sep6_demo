import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { FLIGHTS_CHART_DATA } from "../../helpers/url";
import classes from "./table.module.css";


export default class Top10DestinationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsData: [],
      loading: true,
    };
  }
  async getFlightData() {
    const res = await axios.get(FLIGHTS_CHART_DATA);
    console.log(res.data.topTenDestinationsByFlights);
    this.setState({
      loading: false,
      flightsData: res.data.topTenDestinationsByFlights,
    });
  }
  componentDidMount() {
    this.getFlightData();
  }
  render() {
    const columns = [
      {
        Header: "Destination",
        accessor: "dest",
      },
      {
        Header: "Flights",
        accessor: "flightsCount",
      },
    ];
    return (
      <div className={classes.Table}>
        <ReactTable className = {classes.ReactTable} data={this.state.flightsData} columns={columns} />;
      </div>
    );
  }
}
