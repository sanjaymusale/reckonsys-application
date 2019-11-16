import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import './home.scss';

const Example = props => (
  <div>
    <Jumbotron className="home-container">
      <h1 className="display-3">Welcome !!!</h1>
      <p className="lead">This is a demo application built on ReactJS</p>
      <hr className="my-2" />
      {!props.user.isAuthenticated && (
        <>
          <p className="lead">Login : test@gmail.com</p>
          <p className="lead">Password : Test@123</p>
        </>
      )}
    </Jumbotron>
  </div>
);

const mapStateToProps = state => {
  return {
    user: state.users
  };
};
export default connect(mapStateToProps)(Example);
