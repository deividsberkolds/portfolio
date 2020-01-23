const initTodoState: State.Todo = {
    text: 'text',
    date: '31/12/2020',
    completed: false,
};

type Actions = 'TODO_ADD' | 'TODO_DELETE' | 'TODO_TOGGLE';

export const TodoActionsTypesMap: { [key: string]: Actions } = {
  ADD: 'TODO_ADD',
  DELETE: 'TODO_DELETE',
  TOGGLE: 'TODO_TOGGLE',
};

interface Action {
  type: Actions;
  payload: any;
}

const todoReducer = (state = initTodoState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
