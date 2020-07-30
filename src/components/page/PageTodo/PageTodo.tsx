import React from 'react';
import { Row, Col, InputGroup, Button, Input, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import TodoList, { TodoListProps } from 'components/TodoList/TodoList';
import AlertBanner from 'components/AlertComp';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import getCurrentDate from 'utils';

interface Props extends TodoListProps {
  addTodo: (text: string, date: Date) => void;
}

const PageTodo: React.FC<Props> = ({ addTodo, ...props }) => {
  const [text, setText] = React.useState<string>('');
  const [date, setDate] = React.useState<Date>(new Date());
  const [visible, setVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleInputChange = React.useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    setVisible(false);
  }, []);

  const handleDateInputChange = React.useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    setDate(date);
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
      addTodo(text, date);
      setText('');
      setModalVisible(false);
      toast('Wow so easy !');
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

        <Modal isOpen={modalVisible} toggle={handleModalDismissClick}>
          <ModalHeader>Fill todo info</ModalHeader>
          <InputGroup>
            <Input value={text} onChange={handleInputChange} placeholder="Todo text" />
          </InputGroup>
          <DatePicker
            selected={date}
            onChange={(date: Date) => {
              return setDate(date);
            }}
          />
          <ModalFooter>
            <Button onClick={handleCreateTodoButtonClick}>Create Todo</Button>
          </ModalFooter>
        </Modal>

        <Button onClick={handleOpenCreateTodoModal}>Create Todo</Button>
        <TodoList {...props} />
      </Col>
      <Col md="3">Right Sidebar</Col>
    </Row>
  );
};

export default PageTodo;
