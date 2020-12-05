// import axios from "axios";
// import List from "./List";
// import withListLoading from "./ListLoading";
import React from "react";
import "./App.css";
import BarChart from "../src/components/charts/BarChart";
// import { getFlightsPerMonth } from "../src/http-services/flights-services";

function App() {
  // const ListLoading = withListLoading(List);
  // const [appState, setAppState] = useState({
  //   loading: false,
  //   repos: null,
  // });

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `https://uaa.azurewebsites.net/api/airlines`;
    // axios.defaults.headers.get["Access-Control-Allow-Headers"] =
      // "Content-Type, Authorization";
    // axios.defaults.headers.get["Access-Control-Allow-Origin"] =
    //   "http://192.168.50.76:3000/";

    // axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
  //   axios.get(apiUrl).then((carrier) => {
  //     const carriers = carrier.data;
  //     setAppState({ loading: false, carrier: carriers });
  //   });
  // }, [setAppState]);

  return (
    // <div className="App">
    //   <div className="container">
        <BarChart />
    //     <h1>My Repositories</h1>
    //   </div>
    //   <div className="repo-container">
    //     <ListLoading isLoading={appState.loading} repos={appState.carrier} />
    //   </div>
    // </div>
  );
}

export default App;
