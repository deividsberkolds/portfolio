import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
export interface TodoListProps {
  todo: State.Todo[];
  deleteTodo: (payload: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, deleteTodo }) => {
  if (!todo) return <h3>No items in your todo list</h3>;

  return (
    <ListGroup>
      {/* Last item should goes first */}
      {todo.map((item: State.Todo) => (
        <ListGroupItem key={item.id} className="justify-content-between">
          {item.text} <Badge pill>{new Date(item.date).toLocaleDateString('en-GB')}</Badge>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
