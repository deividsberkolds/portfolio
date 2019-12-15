import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Routes from 'constants/index';

const Header: React.FC = () => (
  <>
    <div className="logo-container"></div>
    <div className="container">
      <Nav>
        <NavItem>
          {/* TODO Change component to be red on active somehow extend */}
          <NavLink tag={RRNavLink} activeClassName={"--red"} exact to={Routes.ROOT}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} activeClassName={"--red"} exact to={Routes.ABOUT}>
            About Us
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    <hr />
  </>
);

export default Header;
