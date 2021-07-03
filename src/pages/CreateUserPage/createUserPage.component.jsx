import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { reset } from "redux-form";
import { Redirect } from "react-router";

import { postUserCreate } from "../../redux/user/users.action";
import FormScoreComponent from "../../components/Form-score/form-score.component";
import { BackButton } from "../../components/backButton/backButton.component";

class CreateUserPage extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data, this.props.tokenAccount.token));
    this.props.dispatch(reset("formCreateUser"));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed! ", "Failed to add new user", "error");
      } else {
        swal(
          "UserCreated!",
          "Nama: " + this.props.getResponDataUser.nama,
          "success"
        );
      }
    }
    return (
      <div>
        <BackButton />
        <h1>AddUser</h1>
        <FormScoreComponent onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tokenAccount: state.account.tokenAccount,
    getResponDataUser: state.user.getResponDataUser,
    errorResponDataUser: state.user.errorResponDataUser,
  };
};

export default connect(mapStateToProps)(CreateUserPage);
