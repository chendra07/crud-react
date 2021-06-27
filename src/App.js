import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

//component
import NavbarComponent from "./components/NavbarComponent/navbar.component";
import JumbotronComponent from "./components/Jumbotron/jumbotron.component";
import HomePage from "./pages/HomePage/home.component";
import EditPage from "./pages/EditPage/editPage.component";
import DetailPage from "./pages/DetailPage/detailPage.component";
import CreateUserPage from "./pages/CreateUserPage/createUserPage.component";
import AboutPage from "./pages/AboutPage/AboutPage.component";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />

        <BrowserRouter>
          <Container>
            <JumbotronComponent />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={CreateUserPage} />
            <Route exact path="/edit/:id" component={EditPage} />
            <Route exact path="/detail/:id" component={DetailPage} />
            <Route exact path="/about" component={AboutPage} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
