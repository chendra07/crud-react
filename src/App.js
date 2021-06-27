import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

//component
import NavbarComponent from "./components/NavbarComponent/navbar.component";
import HomePage from "./pages/HomePage/home.component";
import EditPage from "./pages/EditPage/editPage.component";
import DetailPage from "./pages/DetailPage/detailPage.component";
import AddUserPage from "./pages/AddUserPage/addUserPage.component";
import AboutPage from "./pages/AboutPage/AboutPage.component";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Container>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/create">
              <AddUserPage />
            </Route>
            <Route exact path="/edit/:id">
              <EditPage />
            </Route>
            <Route exact path="/detail/:id">
              <DetailPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
