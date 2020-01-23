import { connect } from 'react-redux';
import { TodoActionsTypesMap } from 'reducers/todo';
import TodoList from 'components/ListGroup';

const mapDispatchToProps = (dispatch: any) => ({
  addTodo(): void {
    dispatch({ type: TodoActionsTypesMap.ADD });
  },

  deleteTodo(payload: string): void {
    dispatch({ type: TodoActionsTypesMap.DELETE, payload });
  },
});

const mapStateToProps = (state: State.Root) => {
	console.log(state,"test");
	 return {
		text: state.todo.text,
		date: state.todo.date,
		completed: state.todo.completed,
	 }
 }
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
