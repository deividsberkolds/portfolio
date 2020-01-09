import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Routes from 'constants/index';

const JumbotronComp: React.FC = () => {
  return (
    <div className="col">
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is my site build on React using Redux, Typescript, ReactStrap, StyledComponents and more...</p>
        <hr className="my-2" />
        <p>Feel free to check it out!</p>
        <p className="lead">
          <Button color="info" tag={RRNavLink} exact to={Routes.ABOUT}>Go!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComp;
