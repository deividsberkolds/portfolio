import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Routes from 'constants/index';

const Header: React.FC = () => (
  <div>
    <Nav vertical>
      <NavItem>
        <NavLink tag={RRNavLink} exact to={Routes.ROOT}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} exact to={Routes.ABOUT}>
          About Us
        </NavLink>
      </NavItem>
    </Nav>
    <hr />
  </div>
);

export default Header;
