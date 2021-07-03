import React, { useState } from "react";
import { connect } from "react-redux";
import { accountLogOut } from "../../redux/account/account.action";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";

import "./navbar.styles.scss";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-width">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">MyLearning</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {props.tokenAccount ? (
                <NavItem>
                  <NavLink href="/login" onClick={() => accountLogOut}>
                    Logout
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              )}
            </Nav>
            <NavbarText>Admin</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tokenAccount: state.account.tokenAccount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  accountLogOut: (_) => dispatch(accountLogOut(_)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
