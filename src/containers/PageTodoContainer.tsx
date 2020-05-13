import { connect } from 'react-redux';
import { TodoActionsTypesMap } from 'reducers/todo';
import PageTodo from 'components/page/PageTodo';

const mapDispatchToProps = (dispatch: any) => ({
  addTodo(text: string, date: string): void {
    dispatch({ type: TodoActionsTypesMap.ADD, payload: { text, date } });
  },

  deleteTodo(payload: string): void {
    dispatch({ type: TodoActionsTypesMap.DELETE, payload });
  },
});

const mapStateToProps = (state: State.Root) => ({ todo: state.todo });

export default connect(mapStateToProps, mapDispatchToProps)(PageTodo);
