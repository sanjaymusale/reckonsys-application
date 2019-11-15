import React from 'react';
import { Jumbotron } from 'reactstrap';
import './home.scss';

const Example = () => {
  return (
    <div>
      <Jumbotron className="home-container">
        <h1 className="display-3">Welcome !!!</h1>
        <p className="lead">This is a demo application built on ReactJS</p>
        <hr className="my-2" />
        <p className="lead">Login : test@gmail.com</p>
        <p className="lead">Password : Test@123</p>
      </Jumbotron>
    </div>
  );
};

export default Example;
