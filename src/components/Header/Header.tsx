import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink as RRNavLink } from 'react-router-dom';

import Homepage from '../Homepage';
import AboutUs from '../AboutUsPage';

import { Nav, NavItem, NavLink } from 'reactstrap';

const Header: React.FC = () => {
  return (
    <Router>
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink tag={RRNavLink} exact to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} exact to="/aboutUs">
              About Us
            </NavLink>
          </NavItem>
        </Nav>
		<hr></hr>

        <Switch>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
