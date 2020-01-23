import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

interface Props {
  text: string,
  date: string,
  completed: boolean,
}

const TodoList: React.FC<Props> = ({text,date,completed}) => {
  return (
    <ListGroup>
      {text}
      {date}
      {completed}
      <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
      <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
      <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
    </ListGroup>
  );
}

export default TodoList;
