import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import PageHome from 'components/PageHome';
import PageAbout from 'components/PageAbout';
import Routes from 'constants/index';

interface Props {}

const App: React.FC<Props> = () => (
  <>
    <Header />
    <Switch>
      <Route path={Routes.ABOUT}>
        <PageAbout />
      </Route>
      <Route path={Routes.ROOT}>
        <PageHome />
      </Route>
    </Switch>
    {/* Footer */}
  </>
);

export default App;
