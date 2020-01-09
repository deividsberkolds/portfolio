import React from 'react';
import CaruselComp from 'components/CaruselComp';
import FormComp from 'components/FormComp';
import { Container } from 'reactstrap';

const PageAbout: React.FC = () => (
  <Container className="d-flex align-content-center flex-column">
    <CaruselComp />
    <br />
    <FormComp />
  </Container>
);

export default PageAbout;
