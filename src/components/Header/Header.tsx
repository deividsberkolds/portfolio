import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink, Container, Row } from 'reactstrap';
import Routes from 'constants/index';

const Header: React.FC = () => (
  <>
    <Container className="col">
      <Row className="bg-dark py-3">
        <Nav pills className="col-xs-12 col-lg-6 col-md-8 pl-3 mx-auto">
          <NavItem>
            {/* TODO Change component to be red on active somehow extend */}
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
      </Row>
    </Container>
  </>
);

export default Header;
