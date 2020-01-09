import React from 'react';
import { Container, Row } from 'reactstrap';

const Footer: React.FC = () => (
  <>
    <Container className="col">
      <Row className="bg-light py-3">
        <Container className="col d-flex justify-content-center">LINK 1</Container>
        <Container className="col d-flex justify-content-center">LINK 1</Container>
        <Container className="col d-flex justify-content-center">LINK 1</Container>
      </Row>
    </Container>
  </>
);

export default Footer;
