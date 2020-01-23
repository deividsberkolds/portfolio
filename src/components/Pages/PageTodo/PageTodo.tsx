import React from 'react';
import { Row, Col } from 'reactstrap';
import TodoList from 'components/ListGroup';

const PageTodo: React.FC = () => (
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
