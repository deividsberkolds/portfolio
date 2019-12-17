import React from 'react';
import JumbotronComp from 'components/JumbotronComp';
import CardComp from 'components/CardComp';
import { Row } from 'reactstrap';
import ProgressBarComp from 'components/ProgressBarComp';

const Homepage: React.FC = () => {
  return (
    <>
      <Row>
        <JumbotronComp />
      </Row>
      <Row className="justify-content-center">
        <CardComp />
        <CardComp />
        <CardComp />
      </Row>
      <Row>
        <ProgressBarComp />
      </Row>
    </>
  );
};

export default Homepage;
