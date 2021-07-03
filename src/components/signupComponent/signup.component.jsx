import React, { Component } from "react";
import swal from "sweetalert";
import { connect } from "react-redux";
import { postAccountRegister } from "../../redux/account/account.action";
import FormInput from "../form-input/form-input.component";

// import "./sign-up.styles.scss";
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      swal("Password doesn't match!");
      return;
    }

    try {
      console.log("yoo");
      this.props.dispatch(postAccountRegister(this.state));
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { nama, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="nama"
            value={nama}
            label="Your name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
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

export default connect()(SignUp);
