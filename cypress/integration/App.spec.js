import { Table, TableCell } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";
import { FLIGHTS_CHART_DATA } from "../../src/helpers/url";

describe("complete e to e test", () => {
  it("e to e test", () => {
    // FLIGHTS PAGE
    cy.visit("/", { timeout: 50000 });

    // --- TABLE ASSERTIONS
    cy.get("table")
      .eq(0)
      .within(() => {
        cy.get("tr").eq(0).should("contain", "Origin", "Mean air time");
        cy.get("tr").eq(2).should("contain", "JFK", "233.0643848332659");
      });

    cy.get("table")
      .eq(1)
      .within(() => {
        cy.get("tr")
          .eq(0)
          .should("contain", "Destination", "Number of flights");
        cy.get("tr").eq(2).should("contain", "LAX", "11906");
      });

    cy.get("table")
      .eq(2)
      .within(() => {
        cy.get("tr")
          .eq(0)
          .should("contain", "Origin", "Departure Delay", "Arrival Delay");
        cy.get("tr").eq(2).should("contain", "JFK", " 8.76", "-0.07");
      });

    // --- CONTAINS ELEMENTS
    cy.contains("UAA");
    cy.contains("Flights");
    cy.contains("Weather");
    cy.contains("Planes");
    cy.contains("The mean airtime of each of the origins in a table");
    cy.contains(
      "The top-10 destinations and how many flights were made to these"
    );
    cy.contains("Mean departure and arrival delay for each origin in a table");

    // WEATHER PAGE
    cy.visit("/weather-page");

    // --- TABLE ASSERTIONS
    cy.get("table")
      .eq(0)
      .within(() => {
        cy.get("tr").eq(0).should("contain", "Origin", "Weather observations");
        cy.get("tr").eq(1).should("contain", "EWR", "8707");
      });

    // --- CONTAINS ELEMENTS
    cy.contains(
      "How many weather observations there are for the origins in a table"
    );
    cy.contains("The daily mean temperature (in Celsius) at JFK");
    cy.contains("For each of the three origins, all temperature attributes");
    cy.contains("The temperature (in Celsius) at JFK");
    cy.contains(
      "The daily mean temperature (in Celsius) for each origin in the same plot"
    );

    //PLANES PAGE
    cy.visit("/planes");

    // --- TABLE ASSERTIONS
    cy.get("table")
      .eq(0)
      .within(() => {
        cy.get("tr")
          .eq(0)
          .should("contain", "Manufacturer", "Number of planes");
        cy.get("tr").eq(1).should("contain", "AIRBUS", "11676");
      });

    cy.get("table")
      .eq(1)
      .within(() => {
        cy.get("tr")
          .eq(0)
          .should("contain", "Manufacturer", "Model", "Number of planes");
        cy.get("tr")
          .eq(1)
          .should("contain", "AIRBUS INDUSTRIE", "A320-214", "400");
      });

    // --- CONTAINS ELEMENTS
    cy.contains("The manufacturers that have more than 200 planes");
    cy.contains(
      "The number of flights each manufacturer with more than 200 planes are responsible for"
    );
    cy.contains("The number of planes of each Airbus Model");
  });
});
