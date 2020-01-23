import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import PageHome from 'components/Pages/PageHome';
import PageAbout from 'components/Pages/PageAbout';
import PageTodo from 'components/Pages/PageTodo';
import Routes from 'constants/index';
import Footer from 'components/Footer';

interface Props {}

const App: React.FC<Props> = () => (
  <>
    <Header />
    <Switch>
      <Route path={Routes.ABOUT}>
        <PageAbout />
      </Route>
      <Route path={Routes.TODO}>
        <PageTodo />
      </Route>
      <Route path={Routes.ROOT}>
        <PageHome />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;
