import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import PageHome from 'components/page/PageHome';
import PageAbout from 'components/page/PageAbout';
import PageTodo from 'containers/PageTodoContainer';
import Routes from 'constants/index';
import Footer from 'components/Footer';

interface Props {}

const App: React.FC<Props> = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={Routes.ROOT}>
        <PageHome />
      </Route>
      <Route exact path={Routes.ABOUT}>
        <PageAbout />
      </Route>
      <Route exact path={Routes.TODO}>
        <PageTodo />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;
