import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
export interface TodoListProps {
  todo: State.Todo[];
  deleteTodo: (payload: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, deleteTodo }) => {
  if (!todo) return <h3>No items in your todo list</h3>;

  let newDate = new Date()
  let date = newDate.getDate();

  console.log(date)

  return (
    <ListGroup>
      {/* Last item should goes first */}
      {todo.map((item: State.Todo) => (
        <ListGroupItem key={item.id} className="justify-content-between">
          {item.text} <Badge pill>{item.date}</Badge>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
