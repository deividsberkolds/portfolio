import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink, Container, Row } from 'reactstrap';
import Routes from 'constants/index';

const Header: React.FC = () => (
  <>
    <Container className="col">
      <Row className="bg-light py-3">
        <Nav pills className="container pl-3 mx-auto">
          <NavItem>
            {/* TODO Change component to be red on active somehow extend */}
            <NavLink tag={RRNavLink} exact to={Routes.ROOT}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} exact to={Routes.ABOUT}>
              About Me
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  </>
);

export default Header;
