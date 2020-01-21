import React from 'react';
import CaruselComp from 'components/CaruselComp';
import FormComp from 'components/FormComp';
import { Container } from 'reactstrap';

const PageAbout: React.FC = () => (
  <Container>
    <CaruselComp />
    <br />
    <FormComp />
  </Container>
);

export default PageAbout;
