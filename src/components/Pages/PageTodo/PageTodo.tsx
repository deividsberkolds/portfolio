import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoList from 'components/ListGroup';

interface Props {}

const PageTodo: React.FC<Props> = () => (
  <>
    <Row>
      <Col md="3">Sidebar</Col>
      <Col md="6">
        <TodoList />
      </Col>
      <Col md="3">Right Sidebar</Col>
    </Row>
  </>
);

export default PageTodo;
