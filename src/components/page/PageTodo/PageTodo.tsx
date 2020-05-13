import React from 'react';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import TodoList, { TodoListProps } from 'components/TodoList/TodoList';
import AlertBanner from 'components/AlertComp';
import Modal from 'components/Modal';

interface Props extends TodoListProps {
  addTodo: (text: string) => void;
}

const PageTodo: React.FC<Props> = ({ addTodo, ...props }) => {
  const [text, setText] = React.useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleInputChange = React.useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    setVisible(false);
  }, []);

  const handleCreateTodoButtonClick = React.useCallback(() => {
      if (text === '') {
        setVisible(true);
        window.setTimeout(() => {
          setVisible(false);
        }, 5000);
        return;
      }
      addTodo(text);
      setText('');
      setModalVisible(true)
      // show success notification
    },
    [text, addTodo]
  );

  const handleSetDateButtonClick = () => {};

  const handleAlertDismissClick = () => {
    setVisible(false);
  };

  const handleModalDismissClick = () => {
    setModalVisible(false);
  };

  return (
    <Row>
      <Col md="3">Sidebar</Col>
      <Col md="6">
        <AlertBanner
          alertText="Error, please enter todo desc"
          isOpen={visible}
          toggle={handleAlertDismissClick}
          alertType="danger"
        />
        <Modal isOpen={modalVisible} className="class" toggle={handleModalDismissClick}/>
        <InputGroup>
          <Input value={text} onChange={handleInputChange} />
          <InputGroupAddon addonType="prepend">
            <Button onClick={handleCreateTodoButtonClick}>Create Todo</Button>
            <Button onClick={handleSetDateButtonClick}>Set Date</Button>
          </InputGroupAddon>
        </InputGroup>
        <TodoList {...props} />
      </Col>
      <Col md="3">Right Sidebar</Col>
    </Row>
  );
};

export default PageTodo;
