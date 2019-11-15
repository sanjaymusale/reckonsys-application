/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.scss';

const AdminMenu = ({ pathname }) => {
  return (
    <React.Fragment>
      <div className="nav-menu-title">
        <Link to="/members">Admin Section</Link>
      </div>
      <div
        className={`nav-menu 
        ${pathname.includes('/members') ? 'active' : ''}`}
      >
        <Link to="/members">Members</Link>
      </div>
      <div
        className={`nav-menu 
        ${pathname.includes('/products') ? 'active' : ''}`}
      >
        <Link to="/products">Products</Link>
      </div>
      <div
        className={`nav-menu 
        ${pathname.includes('/reporting') ? 'active' : ''}`}
      >
        <Link to="/reporting">Reporting</Link>
      </div>
      <div
        className={`nav-menu 
        ${pathname.includes('/users') ? 'active' : ''}`}
      >
        <Link to="/users">Users</Link>
      </div>
    </React.Fragment>
  );
};

const NavBar = props => {
  const { user } = props;
  return (
    <div className="main navbar">
      <div className="container navbar-container">
        <div className="nav">
          {!user.isAuthenticated ? (
            <div className="nav-menu-title">
              <Link to="/">Reckonsys</Link>
            </div>
          ) : (
            <AdminMenu pathname={props.location.pathname} />
          )}
        </div>
        <div className="nav">
          {user.isAuthenticated && (
            <React.Fragment>
              <div className="nav-menu active">
                <a>{user.user}</a>
              </div>
              <div className="nav-menu">
                <Link to="/logout">Logout</Link>
              </div>
            </React.Fragment>
          )}
          {!user.isAuthenticated && (
            <React.Fragment>
              <div className="nav-menu">
                <Link to="/login">Login</Link>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.users
  };
};
export default withRouter(connect(mapStateToProps)(NavBar));
