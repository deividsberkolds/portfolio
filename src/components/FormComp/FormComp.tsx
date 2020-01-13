import React from 'react';
import { Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';

const Example = () => (
  <Form className="col-lg-8 col-md-10 col-xs-6 mx-auto">
    <h1 className="text-center">
      Feel free to contact <Badge color="info">me</Badge>
    </h1>
    <FormGroup>
      <Label for="exampleName">Your Name</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Name" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">You are interested in...</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>Single Page App</option>
        <option>E-Commerce Store</option>
        <option>Wordpress</option>
        <option>Bugfixing</option>
        <option>General question</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="exampleText">Leave a comment</Label>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" /> I consent
      </Label>
    </FormGroup>
    <br />
    <Button>Submit</Button>
  </Form>
);

export default Example;
