import getCurrentDate from 'utils';

const initTodoState: State.Todo[] = [
  {
    id: 0,
    text: 'This is my Todo #1',
    date: '01/01/2020',
    completed: false,
  },
  {
    id: 1,
    text: 'This is my Todo #2',
    date: '02/20/2020',
    completed: false,
  },
];

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
    case TodoActionsTypesMap.ADD:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.text,
          completed: false,
          date: action.payload.date ? action.payload.date : getCurrentDate(),
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
