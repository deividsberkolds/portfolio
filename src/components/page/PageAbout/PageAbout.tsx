import React from 'react';
import CarouselComp from 'components/CarouselComp';
import FormComp from 'components/FormComp';
import { Container } from 'reactstrap';

const PageAbout: React.FC = () => (
  <Container>
    <CarouselComp />
    <br />
    <FormComp />
  </Container>
);

export default PageAbout;
