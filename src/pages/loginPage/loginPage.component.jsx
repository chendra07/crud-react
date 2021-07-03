import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/loginComponent/login.component";

const LogInPage = () => (
  <div className="login">
    <Login />
    <Link to="/signup">Have no account?</Link>
  </div>
);

export default LogInPage;
