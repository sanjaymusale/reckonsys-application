import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { unAuthUser } from './../../../store/actions';

const Logout = props => {
  // props.dispatch(unAuthUser());
  useEffect(() => {
    props.dispatch(unAuthUser());
    localStorage.setItem('Authentication', 'false');
  });

  return <Redirect to="/" />;
};

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps)(Logout);
