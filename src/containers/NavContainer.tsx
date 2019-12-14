import { connect } from 'react-redux';
// TODO: switch app to absolute imports
import Header from '../components/Header';
import { AppActionsTypesMap } from '../reducers/navigation';

const mapDispatchToProps = (dispatch: any) => ({
  navigateTo(payload: string): void {
    dispatch({ type: AppActionsTypesMap.NAVIGATE_TO, payload });
  },
});

const mapStateToProps = (state: State.Root) => ({
  pageName: state.nav.pageName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
