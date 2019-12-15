import React from 'react';
import JumbotronComp from 'components/JumbotronComp';
import CardComp from 'components/CardComp';
import { Row } from 'reactstrap';

const Homepage: React.FC = () => {
  return (
    <>
      <JumbotronComp />
      <Row>
        <CardComp />
        <CardComp />
        <CardComp />
      </Row>
    </>
  );
};

export default Homepage;
