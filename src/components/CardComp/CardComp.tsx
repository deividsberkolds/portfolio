import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import AlertBanner from 'components/AlertComp';

const CardComp = () => {
  return (
    <Col lg="4" md="6" className="mb-4">
      <Card>
        <CardImg top width="100%" src="logo192.png" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      {/* <AlertBanner /> */}
    </Col>
  );
};

export default CardComp;
