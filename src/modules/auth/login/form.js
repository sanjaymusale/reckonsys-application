import React from 'react';
import './style.scss';

const LoginForm = () => {
  return (
    <div className="loginContainer">
      <div className="heading">Login</div>
      <div className="input-row">
        <div className="label">Login</div>
        <input type="text" />
      </div>
      <div className="input-row">
        <div className="label">Password</div>
        <input type="text" />
      </div>
      <div className="input-row">
        <button className="primary">Submit</button>
      </div>
    </div>
  );
};

export default LoginForm;
