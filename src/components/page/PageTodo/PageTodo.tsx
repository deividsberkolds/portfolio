import React from 'react';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import TodoList, { TodoListProps } from 'components/TodoList/TodoList';

interface Props extends TodoListProps {
  addTodo: (text: string) => void;
}

const PageTodo: React.FC<Props> = ({ addTodo, ...props }) => {
  const [text, setText] = React.useState<string>('');

  const handleInputChange = React.useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }, []);

  const handleCreateTodoButtonClick = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      // if no text -> error notification
      addTodo(text);
      setText('');
      // show success notification
    },
    [text, addTodo]
  );

  return (
    <Row>
      <Col md="3">Sidebar</Col>
      <Col md="6">
        <InputGroup>
          <Input value={text} onChange={handleInputChange} />
          <InputGroupAddon addonType="prepend">
            <Button onClick={handleCreateTodoButtonClick}>Create Todo</Button>
          </InputGroupAddon>
        </InputGroup>
        <TodoList {...props} />
      </Col>
      <Col md="3">Right Sidebar</Col>
    </Row>
  );
};

export default PageTodo;
