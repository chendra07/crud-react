import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { postAccountLogin } from "../../redux/account/account.action";
import FormInput from "../form-input/form-input.component";
import "./login.styles.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const { email, password } = this.state;

    try {
      console.log("Yoo");
      this.props.dispatch(postAccountLogin(this.state));
    } catch (error) {
      console.log(error);
      swal("Failed! ", "Failed to add new user", "error");
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tokenAccount: state.account.tokenAccount,
    errorTokenAccount: state.account.errorTokenAccount,
  };
};

export default connect(mapStateToProps)(Login);
