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
    date: '20/02/2020',
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

const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  return String(mm + '/' + dd + '/' + yyyy);
};

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
