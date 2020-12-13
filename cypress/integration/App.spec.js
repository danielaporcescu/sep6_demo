import { Table, TableCell } from '@material-ui/core';
import React from 'react';
import {Bar} from "react-chartjs-2";

describe ('complete e to e test', () => {
  it('e to e test', () => {
    cy.visit('/')

    cy.contains("UAA")
    cy.contains("Home")
    .click
    cy.contains("Weather").click
    cy.get(Table)
    cy.get(Bar)
    cy.get(Chart)
  });
});