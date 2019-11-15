import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authUser } from './../../../store/actions';
import LoginForm from './form';
import userData from './userData';

const Login = props => {
  const [errorMsg, setErrorMsg] = useState('');
  const onSubmit = ({ email, password }) => {
    if (email === userData.email && password === userData.password) {
      const user = { name: userData.name };
      props.dispatch(authUser(user));
      localStorage.setItem(
        'Authentication',
        JSON.stringify({ isAuthenticated: true, user: user })
      );
      setErrorMsg('');
      props.history.push('/members');
    } else {
      setErrorMsg('Invalid Email and Password');
    }
  };
  return <LoginForm onSubmit={onSubmit} errorMsg={errorMsg} />;
};

export default connect()(Login);
