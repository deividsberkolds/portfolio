const initAppState: State.App = {
  title: process.env.REACT_APP_WEBSITE_NAME || '',
  env: process.env.NODE_ENV || '',
  version: process.env.REACT_APP_VERSION || '',
};

type Actions = 'APP_INCREMENT' | 'APP_SWITCH_ENVIRONMENT';

export const AppActionsTypesMap: { [key: string]: Actions } = {
  INCREMENT: 'APP_INCREMENT',
  SWITCH_ENVIRONMENT: 'APP_SWITCH_ENVIRONMENT',
};

interface Action {
  type: Actions;
  payload: any;
}

const appReducer = (state = initAppState, action: Action) => {
  switch (action.type) {
    case AppActionsTypesMap.INCREMENT:
      // TODO must be incremented
      return { ...state, version: incrementStringVersion(state.version, 1) };
    case AppActionsTypesMap.SWITCH_ENVIRONMENT:
      return { ...state, env: action.payload };
    default:
      return state;
  }
};

export default appReducer;

const incrementStringVersion = (version: string, step: number) => {
  //Replace dots in versions number
  let tempVersion = version.replace(/[.]/g, '');
  //Saves length of string to later add leading zeros if needed
  let numberCount = tempVersion.length;
  // Increments version
  let parsedIncrVersion = parseInt(tempVersion) + step;
  let finalVersion = parsedIncrVersion.toString();

  //Adds missing lead zeros, because of parseInt
  if (finalVersion.length !== numberCount) {
    while (numberCount > finalVersion.length) {
      finalVersion = 0 + finalVersion;
    }
  }
  //Adds points in between numbers
  return finalVersion.split('').join('.');
};
