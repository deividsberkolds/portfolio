import { connect } from 'react-redux';
// TODO: switch app to absolute imports
import App from '../components/App';
import { AppActionsTypesMap } from '../reducers/app';

const mapDispatchToProps = (dispatch: any) => ({
  increment(): void {
    dispatch({ type: AppActionsTypesMap.INCREMENT });
  },

  switchEnv(payload: string): void {
    dispatch({ type: AppActionsTypesMap.SWITCH_ENVIRONMENT, payload });
  },
});

const mapStateToProps = (state: State.Root) => ({
  version: state.app.version,
  env: state.app.env,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
