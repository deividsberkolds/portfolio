const initNavigation: State.Navigation = {
	pageName: "Homepage",
  };
  
  type Actions = 'NAV_NAVIGATE_TO';
  
  export const AppActionsTypesMap: { [key: string]: Actions } = {
	NAVIGATE_TO: 'NAV_NAVIGATE_TO'
  };
  
  interface Action {
	type: Actions;
	payload: any;
  }
  
  const navReducer = (state = initNavigation, action: Action) => {
	switch (action.type) {
	  case AppActionsTypesMap.NAVIGATE_TO:
		return { ...state, pageName: action.payload };
	  default:
		return state;
	}
  };
  
  export default navReducer;
  
  