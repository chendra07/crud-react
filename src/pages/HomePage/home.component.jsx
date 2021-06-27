import React, { Component } from "react";
import { connect } from "react-redux";
import JumbotronComponent from "../../components/Jumbotron/jumbotron.component";
import { Container } from "reactstrap";
import TableComponent from "../../components/tableComponent/table.component";
import { getUsersData } from "../../redux/user/users.action";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersData());
  }

  render() {
    return (
      <div>
        <JumbotronComponent />
        <h1>HomePage</h1>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomePage);
