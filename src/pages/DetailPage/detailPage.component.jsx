import React, { Component } from "react";
import { connect } from "react-redux";
import { BackButton } from "../../components/backButton/backButton.component";
import DetailUser from "../../components/detailUser/detailUser.component";

import { getUserDetail } from "../../redux/user/users.action";

class DetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <BackButton />
        <h1>Detail User</h1>
        <DetailUser />
      </div>
    );
  }
}

export default connect()(DetailPage);
