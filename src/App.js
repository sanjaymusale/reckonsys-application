import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/navbar';
import Layout from './components/layout';
import LoginForm from './modules/auth/login';
import Member from './modules/members';
import Products from './modules/products';
import Reporting from './modules/reporting';
import Users from './modules/users/index';
import Logout from './modules/auth/logout';
import Protected from './components/protectedRoute';
import PageNotFound from './components/pageNotFound';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Switch>
          <Route path="/" exact />
          <Route path="/login" component={LoginForm} exact />
          <Protected path="/members" component={Member} exact />
          <Protected path="/products" component={Products} exact />
          <Protected path="/reporting" component={Reporting} exact />
          <Protected path="/users" component={Users} exact />
          <Protected path="/logout" component={Logout} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
