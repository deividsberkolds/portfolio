import React from 'react';
import { Row, Col, InputGroup, Button, Input } from 'reactstrap';
import TodoList, { TodoListProps } from 'components/TodoList/TodoList';
import AlertBanner from 'components/AlertComp';
import { toast } from 'react-toastify';

interface Props extends TodoListProps {
  addTodo: (text: string, date: string) => void;
}

const PageTodo: React.FC<Props> = ({ addTodo, ...props }) => {
  const [text, setText] = React.useState<string>('');
  const [date, setDate] = React.useState('new Date()');
  const [visible, setVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleInputChange = React.useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    setVisible(false);
  }, []);

  const handleCreateTodoButtonClick = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      if (text === '') {
        setVisible(true);
        window.setTimeout(() => {
          setVisible(false);
        }, 5000);
        return;
      }
      toast('Wow so easy !');
      addTodo(text);
      setText('');
      // show success notification
    },
    [text, addTodo]
  );

  const handleOpenCreateTodoModal = () => {
    setModalVisible(true);
  };

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

        <Modal
          isOpen={modalVisible}
          className="class"
          toggle={handleModalDismissClick}
          modalTitle="Create Todo"
          modalSubmitBtnText="Submit"
          modalSubmitBtnCallback={handleCreateTodoButtonClick}
        >
          <InputGroup>
            <Input value={text} onChange={handleInputChange} placeholder="Todo text" />
          </InputGroup>
          <InputGroup>
            <Input value={date} onChange={handleDateInputChange} placeholder="Target Date (If empty will set today)" />
          </InputGroup>
        </Modal>

        <Button onClick={handleOpenCreateTodoModal}>Create Todo</Button>
        <TodoList {...props} />
      </Col>
      <Col md="3">Right Sidebar</Col>
    </Row>
  );
};

export default PageTodo;
