import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/layout/navbar';
import Layout from './components/layout';
import LoginForm from './modules/auth/login';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Route path="/" exact />
        <Route path="/login" component={LoginForm} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
