import React from "react";
import "../../../App.css";
import FlightsPage from "../../pages/flights/flights-page";

export default function Home() {
  return (
    <>
      <div className="home">
        <FlightsPage />
      </div>
    </>
  );
}
