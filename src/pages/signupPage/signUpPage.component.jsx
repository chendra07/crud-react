import React from "react";
import { Link, Redirect } from "react-router-dom";
import SignUp from "../../components/signupComponent/signup.component";

const SignUpPage = () => (
  <div className="login">
    <SignUp />
    <Link to="/login">Already have an account?</Link>
  </div>
);

export default SignUpPage;
