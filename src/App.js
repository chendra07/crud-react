import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

//component
import NavbarComponent from "./components/NavbarComponent/navbar.component";
import JumbotronComponent from "./components/Jumbotron/jumbotron.component";
import HomePage from "./pages/HomePage/home.component";
import EditPage from "./pages/EditPage/editPage.component";
import DetailPage from "./pages/DetailPage/detailPage.component";
import CreateUserPage from "./pages/CreateUserPage/createUserPage.component";
import AboutPage from "./pages/AboutPage/AboutPage.component";
import LogInPage from "./pages/loginPage/loginPage.component";
import SignUpPage from "./pages/signupPage/signUpPage.component";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent />
          <Container>
            <JumbotronComponent />
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/login"
              render={() =>
                this.props.tokenAccount ? <Redirect to="/" /> : <LogInPage />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                this.props.tokenAccount ? <Redirect to="/" /> : <SignUpPage />
              }
            />
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
const mapStateToProps = (state) => {
  return {
    tokenAccount: state.account.tokenAccount,
  };
};

export default connect(mapStateToProps)(App);
