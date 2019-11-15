import React from 'react';
import { connect } from 'react-redux';
import { authUser } from './../../../store/actions';
import LoginForm from './form';
import userData from './userData';

const Login = props => {
  const onSubmit = ({ email, password }) => {
    if (email === userData.email && password === userData.password) {
      const user = { name: userData.name };
      props.dispatch(authUser(user));
      localStorage.setItem(
        'Authentication',
        JSON.stringify({ isAuthenticated: true, user: user })
      );
    }
    props.history.push('/members');
  };
  return <LoginForm onSubmit={onSubmit} />;
};

export default connect()(Login);
