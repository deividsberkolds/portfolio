import React from 'react';
import JumbotronComp from 'components/JumbotronComp';
import CardComp from 'components/CardComp';
import { Row, Container } from 'reactstrap';
import ProgressBarComp from 'components/ProgressBarComp';

const Homepage: React.FC = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default Homepage;
