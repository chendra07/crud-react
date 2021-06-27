import React, { Component } from "react";
import { connect } from "react-redux";
import TableComponent from "../../components/tableComponent/table.component";
import {
  deleteDataUser,
  deleteUserDetail,
  getUsersData,
} from "../../redux/user/users.action";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersData());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomePage);
