import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Routes from 'constants/index';

const JumbotronComp: React.FC = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary" tag={RRNavLink} exact to={Routes.ABOUT}>Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComp;
