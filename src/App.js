import React, { Component } from "react";

//component
import NavbarComponent from "./components/NavbarComponent/navbar.component";
import HomePageComponent from "./components/HomePage/home.component";
import TableComponent from "./components/tableComponent/table.component";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <HomePageComponent />
        <TableComponent />
      </div>
    );
  }
}
