import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/layout/navbar';
import Layout from './components/layout';
import LoginForm from './modules/auth/login';
import Member from './modules/members';
import Products from './modules/products';
import Reporting from './modules/reporting';
import Users from './modules/users/index';
import Logout from './modules/auth/logout';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Route path="/" exact />
        <Route path="/login" component={LoginForm} exact />
        <Route path="/members" component={Member} />
        <Route path="/products" component={Products} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/users" component={Users} />
        <Route path="/logout" component={Logout} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
