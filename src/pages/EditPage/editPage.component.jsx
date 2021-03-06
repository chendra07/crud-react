import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { BackButton } from "../../components/backButton/backButton.component";
import FormScoreComponent from "../../components/Form-score/form-score.component";
import { getUserDetail, putUserUpdate } from "../../redux/user/users.action";

class EditPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    console.log(data);
    console.log(this.props.tokenAccount.token);
    this.props.dispatch(
      putUserUpdate(
        data,
        this.props.tokenAccount.token,
        this.props.match.params.id
      )
    );
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed! ", "Failed update user", "error");
      } else {
        swal(
          "User Edited!",
          "Nama: " + this.props.getResponDataUser.nama,
          "success"
        );
      }
    }
    return (
      <div>
        <BackButton />
        <h1>EditPage</h1>
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

export default connect(mapStateToProps)(EditPage);
