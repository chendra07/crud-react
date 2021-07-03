import React, { Component } from "react";
import { BackButton } from "../../components/backButton/backButton.component";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <BackButton />
        <h1>About Us</h1>
      </div>
    );
  }
}
