import React from "react";
import "../../../App.css";
import FlightsPage from "../../pages/flights-page";

export default function Home() {
  return (
    <>
      {/* <h1 className='home'>HOME</h1> */}
      <div className="home">
        {/* <WeatherPage /> */}
        <FlightsPage />
      </div>
    </>
  );
}
